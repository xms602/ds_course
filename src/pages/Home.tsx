
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Trophy, Brain, Zap, Cpu, Database, LineChart, Sparkles, Clock, ChevronRight, ArrowRight, Layers, GraduationCap, Rocket, Code, Target, Lightbulb, Bot, BarChart3 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { coursesData } from '@/data/coursesData';
import { projectsData } from '@/data/projectsData';

export default function Home() {
  const { courses, getCourseProgress, getTotalCompletedChapters, getTotalChapters, getOverallAccuracy, getPracticeCount } = useStore();

  // 计算总体进度
  const totalChaptersCount = courses.reduce((sum, course) => sum + course.chapters.length, 0);
  const completedChaptersCount = courses.reduce((sum, course) => {
    const progress = getCourseProgress(course.id);
    return sum + (progress.completedChapters?.length || 0);
  }, 0);
  const totalProgress = totalChaptersCount > 0 ? Math.round((completedChaptersCount / totalChaptersCount) * 100) : 0;
  const accuracy = getOverallAccuracy();
  const practiceCount = getPracticeCount();

  // 展示前 6 门课程
  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="space-y-8 relative">
      {/* 页面顶部头部大卡片 */}
      <div className="page-header-card">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg">
            <Cpu className="h-5 w-5 text-white" />
          </div>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            AI 驱动 · 科技赋能
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent leading-tight">
          🐍 Python 数据分析学习平台
        </h1>
        <p className="text-gray-600 text-base mb-5">
          系统化学习路径：认知 → 理论 → 工具 → 实践 → 应用 → 进化
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {/* 总体进度卡片 */}
          <div className="text-center p-5 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl border border-[#667eea]/20">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full mb-3 shadow-lg shadow-purple-200">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#667eea] mb-1">{totalProgress}%</div>
            <div className="text-gray-600 text-sm">总体进度</div>
          </div>

          {/* 完成章节 */}
          <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
              <BookOpen className="h-7 w-7 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{completedChaptersCount}/{totalChaptersCount}</div>
            <div className="text-gray-600 text-sm">完成章节</div>
          </div>

          {/* 正确率 */}
          <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-3">
              <Trophy className="h-7 w-7 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{accuracy}%</div>
            <div className="text-gray-600 text-sm">练习正确率</div>
          </div>

          {/* 练习次数 */}
          <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-3">
              <Zap className="h-7 w-7 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{practiceCount}</div>
            <div className="text-gray-600 text-sm">练习次数</div>
          </div>
        </div>

        {/* 进度条 */}
        <div className="progress-section mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-medium">📊 我的学习进度</span>
            <span className="text-sm text-gray-500">共 {totalChaptersCount} 个章节</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${totalProgress}%` }} />
          </div>
          <div className="progress-stats">
            <span>📚 已完成章节: {completedChaptersCount} / {totalChaptersCount}</span>
            <span>📝 正确率: {accuracy}%</span>
            <span>✅ 练习次数: {practiceCount}</span>
          </div>
        </div>

        {/* 快速入口 */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 font-medium"
          >
            <BookOpen className="h-4 w-4" />
            浏览全部课程
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/practice"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-300/50 transition-all duration-300 font-medium"
          >
            <Target className="h-4 w-4" />
            开始刷题
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-gray-700 bg-white border border-gray-200 hover:border-[#667eea] hover:text-[#667eea] transition-all duration-300 font-medium"
          >
            <Code className="h-4 w-4" />
            实战项目 ({projectsData.length})
          </Link>
        </div>
      </div>

      {/* AI赋能板块 */}
      <div className="page-header-card">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI 赋能数据分析实战</h2>
            <p className="text-gray-500 text-sm">让 AI 成为你的数据分析助教</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold text-gray-900">智能代码补全</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI 根据你的数据分析需求，自动补全 Pandas、NumPy 代码，大幅提升编程效率
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">可视化方案生成</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              描述你的数据特点，AI 推荐最合适的图表类型，一键生成专业可视化代码
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900">数据清洗自动化</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI 识别数据质量问题，自动推荐清洗策略，处理缺失值异常值不再头疼
            </p>
          </div>
        </div>
      </div>

      {/* 精选课程 */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white drop-shadow">精选课程</h2>
              <p className="text-white/80 text-sm">{courses.length} 门完整课程等你来学</p>
            </div>
          </div>
          <Link
            to="/courses"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white/95 rounded-xl text-gray-700 hover:text-[#667eea] transition-colors text-sm font-medium shadow"
          >
            查看全部
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 课程快速导航（锚点式） */}
        <div className="course-card mb-6">
          <div className="font-semibold text-gray-700 text-sm mb-3">🚀 快速进入课程</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {courses.map((c, idx) => {
              const n = idx + 1;
              return (
                <Link
                  key={`home-nav-${c.id}`}
                  to={`/courses/${c.id}`}
                  onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)}
                  style={{
                    background: "#667eea",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 500,
                    boxShadow: "0 2px 6px rgba(102,126,234,0.35)",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  {n}.{c.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => {
            const courseProgress = getCourseProgress(course.id);
            const progress = course.chapters.length > 0
              ? Math.round(((courseProgress.completedChapters?.length || 0) / course.chapters.length) * 100)
              : 0;
            const difficultyLabel =
              course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '高级';
            return (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="course-card !mb-0 block group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* 课程封面 */}
                <div className="h-36 -mx-[30px] -mt-[25px] mb-5 overflow-hidden relative rounded-t-[20px]">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${course.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/40">
                      <div className="w-full bg-white/30 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-[#667eea] to-[#764ba2] h-1.5 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="course-badge !mb-0">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {difficultyLabel}
                  </span>
                  {progress > 0 && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      {progress}% 完成
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{course.estimatedHours} 小时</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{course.chapters.length} 章节</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 学习路径 */}
      <div className="page-header-card">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">🎯 学习路径</h2>
          <p className="text-gray-600">系统化掌握数据分析技能</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, title: '预习阶段', desc: '了解数据分析全景', color: 'from-blue-500 to-cyan-500', path: '/courses' },
            { icon: BookOpen, title: '学习阶段', desc: '掌握 Python 数据分析', color: 'from-[#667eea] to-[#764ba2]', path: '/courses' },
            { icon: Code, title: '实战阶段', desc: '完成真实业务项目', color: 'from-orange-500 to-red-500', path: '/projects' },
            { icon: Trophy, title: '提升阶段', desc: '持续进阶职业发展', color: 'from-green-500 to-emerald-500', path: '/achievements' }
          ].map((stage, index) => (
            <Link
              key={index}
              to={stage.path}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                <stage.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{stage.title}</h3>
              <p className="text-sm text-gray-600">{stage.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 底部标语 */}
      <div className="text-center py-6 text-white/80">
        <span className="inline-flex items-center gap-2 text-sm">
          <Sparkles className="h-4 w-4" />
          进度自动保存 · 课程内容持续更新
        </span>
      </div>
    </div>
  );
}
