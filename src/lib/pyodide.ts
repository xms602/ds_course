
/**
 * Python 环境（Pyodide）管理器
 * =============================================================
 * 采用 CDN 动态加载方式，不依赖 Vite / npm 包打包问题：
 *   1. 动态创建 <script> 标签加载 pyodide.js
 *   2. 通过 window.loadPyodide() 初始化
 *   3. 支持 numpy / pandas / matplotlib 等常用包
 * =============================================================
 */

// Pyodide 公开接口（minimal type，避免依赖具体版本）
export interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<any>;
  runPython: (code: string) => any;
  loadPackage: (names: string[]) => Promise<void>;
  globals: any;
}

// Pyodide CDN 版本（稳定版，与 jsDelivr 兼容）
const PYODIDE_VERSION = 'v0.26.4';
const PYODIDE_CDN = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;
const PRELOAD_PACKAGES = ['numpy', 'pandas', 'matplotlib'];

// ==================== 内部状态 ====================
let pyodideInstance: PyodideInterface | null = null;
let initPromise: Promise<PyodideInterface> | null = null;
let scriptLoading: Promise<void> | null = null;

// ==================== 加载 pyodide.js 脚本 ====================
function ensureScriptLoaded(): Promise<void> {
  // 如果脚本已经加载并且 window.loadPyodide 可用
  if ((window as any).loadPyodide) {
    return Promise.resolve();
  }
  // 如果正在加载中，返回同一个 Promise
  if (scriptLoading) {
    return scriptLoading;
  }
  // 首次加载：动态创建 <script> 标签
  scriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById('pyodide-loader-script');
    if (existing && (window as any).loadPyodide) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.id = 'pyodide-loader-script';
    script.src = `${PYODIDE_CDN}pyodide.js`;
    script.async = true;
    script.onload = () => {
      if ((window as any).loadPyodide) {
        console.log('[Pyodide] ✅ pyodide.js 脚本已加载');
        resolve();
      } else {
        reject(new Error('pyodide.js 已加载但 loadPyodide 未找到'));
      }
    };
    script.onerror = () => {
      scriptLoading = null;
      reject(new Error(`无法加载 pyodide.js（${PYODIDE_CDN}），请检查网络连接`));
    };
    document.head.appendChild(script);
  });
  return scriptLoading;
}

// ==================== 初始化主函数 ====================
export async function initPyodide(): Promise<PyodideInterface> {
  // 如果已经初始化完成，直接返回
  if (pyodideInstance) return pyodideInstance;

  // 如果正在初始化，返回现有 Promise
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      console.log('[Pyodide] 🔄 开始初始化 Python 环境...');

      // 步骤 1: 加载 pyodide.js 脚本
      await ensureScriptLoaded();

      // 步骤 2: 调用 window.loadPyodide 初始化
      const loadFn = (window as any).loadPyodide;
      if (!loadFn) {
        throw new Error('loadPyodide 函数不可用');
      }

      pyodideInstance = await loadFn({
        indexURL: PYODIDE_CDN,
      });

      console.log('[Pyodide] ✅ 核心已加载，开始安装科学计算包...');

      // 步骤 3: 安装 numpy, pandas, matplotlib
      await pyodideInstance!.loadPackage(PRELOAD_PACKAGES);

      console.log('[Pyodide] ✅ 包已安装，正在配置 Python 环境...');

      // 步骤 4: 配置 matplotlib + 预导入常用库
      await pyodideInstance!.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import warnings

# 配置 matplotlib 字体以避免中文显示警告
plt.rcParams['axes.unicode_minus'] = False
plt.rcParams['figure.dpi'] = 100
# 使用系统可用字体，抑制字体缺失警告
plt.rcParams['font.sans-serif'] = ['DejaVu Sans', 'STIXGeneral', 'Arial Unicode MS']
plt.rcParams['font.family'] = 'sans-serif'
# 忽略字体相关警告
warnings.filterwarnings('ignore', message='Glyph.*missing.*font')

import numpy as np
import pandas as pd
import io
import sys
import base64

print('[Python] ✅ 环境就绪。已导入: numpy as np, pandas as pd, matplotlib.pyplot as plt')
`);

      console.log('[Pyodide] ✅ 初始化完成！');
      return pyodideInstance!;
    } catch (error) {
      console.error('[Pyodide] ❌ 初始化失败:', error);
      pyodideInstance = null;
      initPromise = null;
      throw error;
    }
  })();

  return initPromise;
}

export function isPyodideReady(): boolean {
  return pyodideInstance !== null;
}

// ==================== 代码执行 ====================
/**
 * 执行 Python 代码，捕获 stdout 和可选图表
 */
export async function runPythonWithChart(code: string) {
  try {
    const py = await initPyodide();
    if (!py) {
      return {
        success: false,
        result: '',
        error: 'Python 环境未初始化',
        chartData: undefined,
      };
    }

    // 步骤 1: 捕获 stdout/stderr
    await py.runPythonAsync(`
import sys, io
_captured_stdout = io.StringIO()
_captured_stderr = io.StringIO()
_orig_stdout = sys.stdout
_orig_stderr = sys.stderr
sys.stdout = _captured_stdout
sys.stderr = _captured_stderr
`);

    // 步骤 2: 执行用户代码
    let execError: string | null = null;
    try {
      await py.runPythonAsync(code);
    } catch (e: any) {
      execError = e?.message || String(e);
      console.warn('[Pyodide] Python 执行异常:', execError);
    }

    // 步骤 3: 恢复 stdout 并提取输出
    await py.runPythonAsync(`
sys.stdout = _orig_stdout
sys.stderr = _orig_stderr
_stdout_result = _captured_stdout.getvalue()
_stderr_result = _captured_stderr.getvalue()
_captured_stdout.close()
_captured_stderr.close()
`);

    // 从 Python globals 中读取结果
    let stdoutResult = '';
    let stderrResult = '';
    try {
      // 从 Python globals 中读取字符串变量
      const pyStdout = py.globals.get('_stdout_result');
      const pyStderr = py.globals.get('_stderr_result');
      stdoutResult = String(pyStdout || '');
      stderrResult = String(pyStderr || '');
      // 注意：pyodide 返回的字符串对象可能是 proxy，用完后销毁
      if (typeof pyStdout?.destroy === 'function') pyStdout.destroy();
      if (typeof pyStderr?.destroy === 'function') pyStderr.destroy();
    } catch (err) {
      console.warn('[Pyodide] 提取输出失败:', err);
    }

    // 步骤 4: 尝试提取 matplotlib 图表
    let chartData: string | undefined = undefined;
    try {
      const hasFigure = py.runPython(`
import matplotlib.pyplot as plt
_has_fig = len(plt.get_fignums()) > 0
_has_fig
`);
      if (hasFigure) {
        const b64 = py.runPython(`
import matplotlib.pyplot as plt
from io import BytesIO
import base64
_buf = BytesIO()
_cur = plt.gcf()
_cur.savefig(_buf, format='png', bbox_inches='tight', dpi=120)
_buf.seek(0)
_b64 = base64.b64encode(_buf.read()).decode('utf-8')
plt.close('all')
_b64
`);
        if (b64 && String(b64).trim()) {
          chartData = `data:image/png;base64,${String(b64)}`;
        }
      }
    } catch (chartErr) {
      console.warn('[Pyodide] 图表提取失败（非致命）:', chartErr);
    }

    // 步骤 5: 组合输出
    const combined = [stdoutResult, stderrResult]
      .map(s => (s || '').toString().trim())
      .filter(Boolean)
      .join('\n');

    if (execError) {
      return {
        success: false,
        result: combined || '',
        error: execError,
        chartData,
      };
    }

    return {
      success: true,
      result: combined || '代码执行成功（无输出）',
      chartData,
    };
  } catch (error: any) {
    console.error('[Pyodide] ❌ 执行异常:', error);
    return {
      success: false,
      result: '',
      error: error?.message || String(error),
      chartData: undefined,
    };
  }
}

/** 纯代码执行（与 runPythonWithChart 等价，兼容旧 API） */
export async function runPythonCode(code: string) {
  return runPythonWithChart(code);
}
