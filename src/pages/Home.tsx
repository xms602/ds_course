
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Trophy, Brain, Zap, Cpu, Database, LineChart, Sparkles, Clock, ChevronRight, ArrowRight, Layers, GraduationCap, Rocket, Code } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { chaptersData } from '@/data/chapters';

export default function Home() {
  const { getTotalCompletedChapters, getTotalChapters, getOverallAccuracy, getPracticeCount } = useStore();
  
  const totalProgress = Math.round((getTotalCompletedChapters() / getTotalChapters()) * 100);
  const completedChapters = getTotalCompletedChapters();
  const totalChapters = getTotalChapters();
  const overallAccuracy = getOverallAccuracy();
  const practiceCount = getPracticeCount();

  const stages = [
    {
      name: 'Python基础',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      description: 'Python语法基础入门'
    },
    {
      name: '数据分析基础',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      description: '数据处理与分析入门'
    },
    {
      name: '数据可视化',
      icon: LineChart,
      color: 'from-emerald-500 to-teal-500',
      description: '图表绘制与数据展示'
    }
  ];

  return (
    <div className="space-y-16 relative overflow-hidden min-h-screen">
      {/* 科技感背景装饰 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/15 via-indigo-900/15 to-purple-900/15"></div>
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* 科技感网格 */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#6366f133_1px,transparent_1px),linear-gradient(to_bottom,#6366f133_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
      </div>

      <section className="relative z-10 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-25">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <Cpu className="h-4 w-4" />
                <span className="text-sm font-medium">AI 驱动 · 科技赋能</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight">
              Python数据分析学习平台
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              系统化学习路径：认知-理论-工具-实践-应用-进化
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
                浏览全部课程
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 justify-center px-8 py-3 border-2 border-white/30 text-lg font-semibold rounded-xl text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
              >
                <Trophy className="h-5 w-5 group-hover:animate-bounce" />
                开始刷题
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="flex items-center gap-2 mb-6">
            <LineChart className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">我的学习进度</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{totalProgress}%</div>
              <div className="text-gray-600">总体进度</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">{completedChapters}/{totalChapters}</div>
              <div className="text-gray-600">完成章节</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{overallAccuracy}%</div>
              <div className="text-gray-600">正确率</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">{practiceCount}</div>
              <div className="text-gray-600">练习次数</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">全部课程</h2>
            <p className="text-gray-600">{chaptersData.length} 个章节等你来学</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chaptersData.slice(0, 8).map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`/courses`}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-white text-5xl font-bold opacity-20 absolute">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <Code className="h-12 w-12 text-white relative z-10" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{chapter.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{chapter.content.split('\n')[0].replace('# ', '')}</p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>30 分钟</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{chapter.exercises.length} 练习</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            查看全部课程
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white backdrop-blur-sm border border-white/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">AI 赋能学习</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">AI是加速器，而非替代品</h2>
              <p className="text-blue-100 leading-relaxed">
                AI工具通过自动化繁琐步骤，让你能将更多精力聚焦于业务理解、逻辑构建和决策建议，更快地进入"用数据讲故事"的核心环节。
              </p>
            </div>
            <div className="w-40 h-40 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <Brain className="relative z-10 h-full w-full text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
