import { loadPyodide } from 'pyodide';

// 全局Pyodide实例
let pyodide: any = null;

// 初始化Pyodide，预装所需库
export async function initPyodide() {
  if (pyodide) return pyodide;
  
  try {
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.3/full/'
    });
    
    // 预装核心库（只加载可用的核心库）
    await pyodide.loadPackage([
      'pandas', 'numpy', 'matplotlib'
    ]);
    
    // 配置matplotlib，使其在前端渲染
    pyodide.runPython(`
      import matplotlib.pyplot as plt
      import matplotlib
      matplotlib.use('Agg')
      plt.ioff()
    `);
    
    return pyodide;
  } catch (error) {
    console.error('Pyodide初始化失败:', error);
    throw error;
  }
}

// 运行Python代码
export async function runPythonCode(code: string) {
  const py = await initPyodide();
  try {
    const result = await py.runPythonAsync(code);
    return { success: true, result };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// 生成图表
export async function generateChart(code: string) {
  const py = await initPyodide();
  try {
    // 运行代码，生成图表
    await py.runPythonAsync(code);
    
    // 获取图表数据
    const chartData = py.runPython(`
      import base64
      from io import BytesIO
      import matplotlib.pyplot as plt
      buffer = BytesIO()
      plt.savefig(buffer, format='png')
      buffer.seek(0)
      img_str = base64.b64encode(buffer.read()).decode('utf-8')
      plt.close()
      img_str
    `);
    
    return { success: true, chartData: `data:image/png;base64,${chartData}` };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
