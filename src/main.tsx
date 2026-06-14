import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// ================= Monaco Editor Worker 配置 =================
// Monaco Editor 需要独立的 web worker 才能在浏览器中提供代码编辑、语法高亮、智能提示。
// 在 Vite + 普通脚本环境下，默认从 jsdelivr CDN 加载 workers，避免本地 bundle 配置问题。
(window as any).MonacoEnvironment = {
  getWorkerUrl: function (_workerId: string, label: string) {
    // 返回一个内联 worker 的 URL，避免同源策略问题
    const getWorker = (moduleId: string, label: string) => {
      // jsdelivr CDN 上的 monaco editor workers
      return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/../${label === 'editorWorkerService' ? 'editor/editor' : label}/${label === 'editorWorkerService' ? 'editorWorker' : label}.worker.js`;
    };
    // 使用 data URL 加载 worker，避免跨域问题
    const workerUrl = (() => {
      if (label === 'json') {
        return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/language/json/json.worker.js`;
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/language/css/css.worker.js`;
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/language/html/html.worker.js`;
      }
      if (label === 'typescript' || label === 'javascript') {
        return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/language/typescript/ts.worker.js`;
      }
      return `https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/vs/editor/editor.worker.js`;
    })();
    // 返回一个能 importScripts 的简单 worker bootstrap
    const workerCode = `self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.46.0/min/' }; importScripts('${workerUrl}');`;
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(workerCode)}`;
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
