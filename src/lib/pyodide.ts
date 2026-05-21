import { loadPyodide } from 'pyodide';

// 全局Pyodide实例
let pyodide: any = null;

// 初始化Pyodide，预装所需库
export async function initPyodide() {
  if (pyodide) return pyodide;
  
  try {
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'
    });
    
    // 预装核心库
    await pyodide.loadPackage([
      'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit-learn', 'mlxtend'
    ]);
    
    // 配置matplotlib，使其在前端渲染
    pyodide.runPython(`
      import matplotlib.pyplot as plt
      plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']
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
      buffer = BytesIO()
      plt.savefig(buffer, format='png')
      buffer.seek(0)
      img_str = base64.b64encode(buffer.read()).decode('utf-8')
      img_str
    `);
    
    return { success: true, chartData: `data:image/png;base64,${chartData}` };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
