
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ChevronRight, Layers } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const { courses, getCourseProgress, unlockAchievement } = useStore();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="page-header-card text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">课程未找到</h2>
        <Link to="/courses" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
          <ArrowLeft className="h-4 w-4" />
          返回课程列表
        </Link>
      </div>
    );
  }

  const courseProgress = getCourseProgress(course.id);
  const completedChaptersCount = courseProgress?.completedChapters?.length || 0;
  const progress = course.chapters.length > 0
    ? Math.round((completedChaptersCount / course.chapters.length) * 100)
    : 0;

  const difficultyLabel =
    course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '高级';

  const isCourseComplete = progress >= 100;

  return (
    <div className="space-y-8">
      {/* 顶部导航 */}
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-gray-700 hover:text-[#667eea] transition-colors shadow"
      >
        <ArrowLeft className="h-4 w-4" />
        返回课程列表
      </Link>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* 左侧：课程信息 & 章节 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 课程头部卡片 */}
          <div className="page-header-card !p-0 overflow-hidden">
            {/* 封面 */}
            <div
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${course.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-medium">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-medium">
                    {difficultyLabel}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-white/90">{course.description}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#667eea]" />
                    <span>{course.estimatedHours} 小时</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#667eea]" />
                    <span>{course.chapters.length} 章节</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    {progress}%
                  </div>
                  <div className="text-xs text-gray-500">完成度</div>
                </div>
              </div>

              {/* 进度条 */}
              <div className="progress-bar-container !h-2.5">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          {/* 课程导航菜单 - 锚点式 */}
          <div className="course-card">
            <div className="font-semibold text-gray-700 text-sm mb-3">🚀 课程快速导航</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              {courses.map((c, idx) => {
                const n = idx + 1;
                const isCurrent = c.id === course.id;
                return (
                  <Link
                    key={c.id}
                    to={`/courses/${c.id}`}
                    onClick={() => {
                      // 进入课程后，把滚动位置复位到顶部
                      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
                    }}
                    style={{
                      background: isCurrent ? "#667eea" : "#f3f4f6",
                      color: isCurrent ? "white" : "#374151",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 500,
                      boxShadow: isCurrent ? "0 2px 6px rgba(102,126,234,0.35)" : "none",
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

          {/* 章节列表 */}
          <div className="page-header-card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📖 课程章节</h2>
            <div className="space-y-3">
              {course.chapters.map((chapter, index) => {
                const isCompleted = (courseProgress?.completedChapters || []).includes(chapter.id);
                return (
                  <Link
                    key={chapter.id}
                    to={`/learn/${course.id}/${chapter.id}`}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all group hover:shadow-md ${
                      isCompleted
                        ? 'border-green-200 bg-green-50/50'
                        : 'border-gray-100 bg-white hover:border-[#667eea]/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-md shadow-green-200'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-br group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:text-white transition-all'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-5 w-5" /> : <span className="text-sm font-bold">{index + 1}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold truncate ${isCompleted ? 'text-green-700' : 'text-gray-900 group-hover:text-[#667eea]'}`}>
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {chapter.exercises.length} 个练习 · {chapter.quiz?.length || 0} 道测验
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#667eea] transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* 右侧：学习状态 */}
        <div className="lg:col-span-1">
          <div className="page-header-card sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">📊 学习状态</h3>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">总体进度</span>
                <span className="font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                  {progress}%
                </span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">已完成章节</span>
                <span className="font-medium text-gray-900">{completedChaptersCount} / {course.chapters.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">预计学习时长</span>
                <span className="font-medium text-gray-900">{course.estimatedHours} 小时</span>
              </div>
            </div>

            {course.chapters.length > 0 && (
              <Link
                to={`/learn/${course.id}/${course.chapters[0].id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-purple-300/50 transition-all font-medium"
              >
                <BookOpen className="h-4 w-4" />
                {isCourseComplete ? '复习课程' : (completedChaptersCount > 0 ? '继续学习' : '开始学习')}
              </Link>
            )}

            {!isCourseComplete && (
              <Link
                to={`/quiz/${course.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#667eea] bg-white border-2 border-[#667eea]/20 hover:border-[#667eea] hover:bg-[#667eea]/5 transition-all font-medium mt-3"
              >
                <CheckCircle className="h-4 w-4" />
                参加测评
              </Link>
            )}

            {isCourseComplete && (
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-center">
                <div className="text-2xl mb-1">🎉</div>
                <div className="font-bold text-green-700">恭喜完成课程！</div>
                <div className="text-xs text-green-600 mt-1">继续挑战其他课程吧</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
