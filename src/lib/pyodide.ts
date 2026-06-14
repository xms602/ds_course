import { loadPyodide, type PyodideInterface } from 'pyodide';

let pyodide: PyodideInterface | null = null;
let initPromise: Promise<PyodideInterface> | null = null;

// Pyodide 需要从 CDN 加载 .wasm 和 Python 标准库文件。
// 使用 jsdelivr 提供的稳定 CDN。
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/';

export async function initPyodide(): Promise<PyodideInterface> {
  if (pyodide) return pyodide;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      console.log('[Pyodide] 开始初始化 Python 环境...');
      pyodide = await loadPyodide({
        indexURL: PYODIDE_CDN,
      });
      console.log('[Pyodide] 核心已加载，正在安装 pandas/numpy/matplotlib...');

      await pyodide.loadPackage(['pandas', 'numpy', 'matplotlib']);
      console.log('[Pyodide] 包已安装，正在配置 matplotlib...');

      // 初始化 matplotlib（Agg 模式，非交互式）
      // 并预先导入常用模块，后续 runPython 可以直接使用
      pyodide.runPython(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.ioff()

# 中文字体配置
try:
    import matplotlib.font_manager as fm
    _available = [f.name for f in fm.fontManager.ttflist]
    _preferred = ['Microsoft YaHei', 'SimHei', 'Heiti SC',
                   'PingFang HK', 'Noto Sans CJK SC',
                   'WenQuanYi Micro Hei', 'WenQuanYi Zen Hei',
                   'Arial Unicode MS', 'DejaVu Sans']
    for _fn in _preferred:
        if _fn in _available:
            matplotlib.rcParams['font.sans-serif'] = [_fn] + matplotlib.rcParams['font.sans-serif']
            break
except Exception:
    pass
matplotlib.rcParams['axes.unicode_minus'] = False
matplotlib.rcParams['figure.dpi'] = 100

# 预导入常用库，用户代码中可以直接用
import numpy as np
import pandas as pd
import base64
import io
import sys
print('[Python] 环境就绪。已导入: numpy as np, pandas as pd, matplotlib.pyplot as plt')
`);
      console.log('[Pyodide] 初始化完成 ✓');
      return pyodide;
    } catch (error) {
      console.error('[Pyodide] 初始化失败:', error);
      pyodide = null;
      initPromise = null;
      throw error;
    }
  })();
  return initPromise;
}

export function isPyodideReady(): boolean {
  return pyodide !== null;
}

/**
 * 使用 io.StringIO 捕获 stdout/stderr，执行 Python 代码
 * 返回文本输出 + 可选的 base64 PNG 图表
 */
export async function runPythonWithChart(code: string) {
  try {
    const py = await initPyodide();
    if (!py) {
      return { success: false, error: 'Python 环境未初始化，请刷新页面' };
    }

    // 确保在 Python 环境中有基础的工具函数
    py.runPython(`
import sys, io, base64
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.ioff()

# stdout 捕获器
__captured_out = io.StringIO()
__captured_err = io.StringIO()
__orig_stdout = sys.stdout
__orig_stderr = sys.stderr
`);

    // 步骤 1：重定向 stdout，执行用户代码
    let execErrorMsg = '';
    try {
      py.runPython(`
sys.stdout = __captured_out
sys.stderr = __captured_err
`);
      await py.runPythonAsync(code);
    } catch (e: any) {
      execErrorMsg = String(e?.message || e);
      // 捕获异常的 traceback（包含在 stderr 中）
    } finally {
      // 恢复 stdout
      py.runPython(`
sys.stdout = __orig_stdout
sys.stderr = __orig_stderr
`);
    }

    // 步骤 2：获取 stdout 输出
    const stdoutResult = py.runPython(`__captured_out.getvalue()`) as string;
    const stderrResult = py.runPython(`__captured_err.getvalue()`) as string;
    // 清空 buffer 避免下次执行混合
    py.runPython(`
__captured_out.close()
__captured_err.close()
__captured_out = io.StringIO()
__captured_err = io.StringIO()
`);

    // 步骤 3：尝试保存当前活动图表为 base64 PNG
    let chartData: string | undefined = undefined;
    try {
      const b64 = py.runPython(`
import matplotlib.pyplot as plt
from io import BytesIO
import base64

_figs = plt.get_fignums()
if _figs:
    _current_fig = plt.gcf()
    _buf = BytesIO()
    try:
        _current_fig.savefig(_buf, format='png', bbox_inches='tight', dpi=120)
        _buf.seek(0)
        _result = base64.b64encode(_buf.read()).decode('utf-8')
    except Exception:
        _result = ''
    plt.close('all')
else:
    _result = ''
_result
`);
      if (b64 && String(b64).trim()) {
        chartData = `data:image/png;base64,${b64}`;
      }
    } catch (chartErr: any) {
      console.warn('图表提取失败（非致命）:', chartErr);
    }

    // 步骤 4：返回结果
    const combinedOutput = [stdoutResult, stderrResult]
      .map(s => (s || '').toString().trim())
      .filter(Boolean)
      .join('\n');

    if (execErrorMsg) {
      return {
        success: false,
        result: combinedOutput || '',
        error: execErrorMsg,
        chartData,
      };
    }

    return {
      success: true,
      result: combinedOutput || '代码执行成功（无输出）',
      chartData,
    };
  } catch (error: any) {
    console.error('[Pyodide] 执行异常:', error);
    return {
      success: false,
      error: error?.message || String(error),
    };
  }
}

/** 纯代码执行（不含图表提取），保留原 API */
export async function runPythonCode(code: string) {
  return runPythonWithChart(code);
}
