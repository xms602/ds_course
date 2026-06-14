import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, RefreshCw, MessageSquare, Lightbulb, CheckCircle, AlertCircle, Download, ChevronLeft } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { runPythonWithChart, runPythonCode } from '@/lib/pyodide';
import { saveProjectProgress, getProjectProgress, saveChatMessages, getChatMessages, type ChatMessage } from '@/lib/storage';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [chartData, setChartData] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isGeneratingDataset, setIsGeneratingDataset] = useState(false);
  const [datasetGenerated, setDatasetGenerated] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
      return;
    }

    // 加载项目进度
    const progress = getProjectProgress(project.id);
    setCode(progress.code || '');

    // 加载聊天记录
    const savedMessages = getChatMessages(project.id);
    setMessages(savedMessages);

    // 初始化 Pyodide（使用我们封装好的 initPyodide，自动加载 pandas/numpy/matplotlib）
    let cancelled = false;
    import('@/lib/pyodide')
      .then(m => m.initPyodide())
      .then(() => {
        if (!cancelled) setIsPyodideLoading(false);
      })
      .catch(err => {
        console.error('Pyodide 初始化失败:', err);
        if (!cancelled) setIsPyodideLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [project, id, navigate]);
  
  if (!project) {
    return <div>项目不存在</div>;
  }
  
  const activeTask = project.tasks[activeTaskIndex];
  
  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('');
    setChartData(null);

    try {
      // 一次执行，同时获取文本输出和图表
      const result = await runPythonWithChart(code);
      if (result.success) {
        setOutput(result.result ? result.result.toString() : '代码执行成功');
        if (result.chartData) {
          setChartData(result.chartData);
        }
      } else {
        setOutput(`错误: ${result.error}`);
      }
    } catch (error) {
      setOutput(`执行错误: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };
  
  const handleGenerateDataset = async () => {
    setIsGeneratingDataset(true);
    setOutput('');
    
    try {
      const result = await runPythonCode(project.dataset.generateCode);
      if (result.success) {
        setOutput('数据集生成成功！\n' + (result.result ? result.result.toString() : ''));
        setDatasetGenerated(true);
      } else {
        setOutput(`错误: ${result.error}`);
      }
    } catch (error) {
      setOutput(`生成错误: ${error}`);
    } finally {
      setIsGeneratingDataset(false);
    }
  };
  
  const handleSaveProgress = () => {
    saveProjectProgress(project.id, {
      code,
      completed: false
    });
  };
  
  const handleCompleteTask = () => {
    saveProjectProgress(project.id, {
      code,
      completed: true
    });
  };
  
  const handleSendAIMessage = async () => {
    if (!aiInput.trim()) return;
    
    const newMessage: ChatMessage = {
      role: 'user',
      content: aiInput,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setAiInput('');
    setIsLoadingAI(true);
    
    try {
      // 模拟AI响应（实际项目中会调用Workers）
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          role: 'assistant',
          content: `我是你的Python数据分析教练。关于你的问题："${aiInput}"，我的建议是：\n\n1. 首先检查你的代码逻辑\n2. 确保数据格式正确\n3. 尝试使用pandas的groupby功能\n4. 考虑使用matplotlib进行可视化\n\n记住，数据分析的关键是理解问题，而不仅仅是编写代码。`,
          timestamp: Date.now()
        };
        
        setMessages(prev => [...prev, aiResponse]);
        saveChatMessages(project.id, [...messages, newMessage, aiResponse]);
        setIsLoadingAI(false);
      }, 1000);
    } catch (error) {
      setIsLoadingAI(false);
      console.error('AI请求失败:', error);
    }
  };
  
  const handleGetHint = () => {
    const hintMessage: ChatMessage = {
      role: 'assistant',
      content: `提示：${activeTask.hints[0]}`,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, hintMessage]);
    saveChatMessages(project.id, [...messages, hintMessage]);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <ChevronLeft className="h-5 w-5" />
          <span>返回项目列表</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：项目信息和任务 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">难度</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                  project.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {project.difficulty === 'beginner' ? '初级' : project.difficulty === 'intermediate' ? '中级' : '高级'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">预计时长</span>
                <span className="text-gray-900">{project.estimatedHours} 小时</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">任务数量</span>
                <span className="text-gray-900">{project.tasks.length} 个</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">数据集信息</h2>
            <p className="text-gray-600 mb-4">{project.dataset.description}</p>
            <button
              onClick={handleGenerateDataset}
              disabled={isGeneratingDataset}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGeneratingDataset ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {isGeneratingDataset ? '生成中...' : '生成数据集'}
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">任务列表</h2>
            <div className="space-y-2">
              {project.tasks.map((task, index) => (
                <button
                  key={task.id}
                  onClick={() => setActiveTaskIndex(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeTaskIndex === index
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{index + 1}. {task.title}</div>
                  <div className="text-sm text-gray-600 mt-1 line-clamp-2">{task.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 右侧：代码编辑器和运行结果 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 任务详情 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{activeTask.title}</h2>
            <p className="text-gray-600 mb-4">{activeTask.description}</p>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-blue-800 mb-2">期望输出</h3>
              <p className="text-blue-700">{activeTask.expectedOutput}</p>
            </div>
          </div>
          
          {/* 代码编辑器 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">代码编辑器</h3>
              <div className="flex gap-2">
                <button
                  onClick={handleSaveProgress}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                >
                  <CheckCircle className="h-4 w-4" />
                  保存
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning || isPyodideLoading}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRunning ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {isRunning ? '运行中...' : '运行'}
                </button>
              </div>
            </div>
            {isPyodideLoading ? (
              <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
                <div className="text-gray-500">加载Python环境中...</div>
              </div>
            ) : (
              <Editor
                height="400px"
                defaultLanguage="python"
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: true },
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on'
                }}
              />
            )}
          </div>
          
          {/* 运行结果 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-900 mb-4">运行结果</h3>
            <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
              {output ? (
                <pre className="whitespace-pre-wrap text-sm">{output}</pre>
              ) : (
                <div className="text-gray-500">运行代码查看结果</div>
              )}
              {chartData && (
                <div className="mt-4">
                  <img src={chartData} alt="图表" className="max-w-full" />
                </div>
              )}
            </div>
          </div>
          
          {/* AI陪练 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">AI陪练</h3>
              <button
                onClick={handleGetHint}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors"
              >
                <Lightbulb className="h-4 w-4" />
                思路点拨
              </button>
            </div>
            <div className="h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-gray-500 text-center py-8">
                  有问题？向AI教练请教
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="text-sm font-medium mb-1">
                        {msg.role === 'user' ? '你' : 'AI教练'}
                      </div>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                ))
              )}
              {isLoadingAI && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                    <div className="text-sm font-medium mb-1">AI教练</div>
                    <div className="animate-pulse">思考中...</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendAIMessage()}
                placeholder="输入你的问题..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendAIMessage}
                disabled={isLoadingAI || !aiInput.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleCompleteTask}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              完成任务
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
