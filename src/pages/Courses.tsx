
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Layers, ChevronRight } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Courses() {
  const { courses, getCourseProgress } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(courses.map(c => c.category)))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '初级';
      case 'intermediate': return '中级';
      case 'advanced': return '高级';
      default: return difficulty;
    }
  };

  return (
    <div>
      <div className="page-header-card">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">📚 课程体系</h1>
        <p className="text-gray-600 mb-5">系统化学习商务数据分析知识 · 共 {courses.length} 门课程</p>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">课程分类</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md shadow-purple-200'
                      : 'bg-white text-gray-700 hover:shadow border border-gray-200'
                  }`}
                >
                  {category === 'all' ? '全部' : category}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">难度等级</label>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedDifficulty === difficulty
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-200'
                      : 'bg-white text-gray-700 hover:shadow border border-gray-200'
                  }`}
                >
                  {getDifficultyLabel(difficulty)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 课程快速导航（锚点式） */}
      <div className="course-card">
        <div className="font-semibold text-gray-700 text-sm mb-3">🚀 课程快速导航</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {courses.map((c, idx) => {
            const n = idx + 1;
            return (
              <Link
                key={`nav-${c.id}`}
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

      {filteredCourses.length === 0 ? (
        <div className="page-header-card text-center py-16">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">暂无相关课程</h3>
          <p className="text-gray-500">请尝试其他筛选条件</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const courseProgress = getCourseProgress(course.id);
            const progress = course.chapters.length > 0
              ? Math.round(((courseProgress.completedChapters?.length || 0) / course.chapters.length) * 100)
              : 0;
            return (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="course-card !mb-0 block group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* 封面 */}
                <div className="h-40 -mx-[30px] -mt-[25px] mb-5 overflow-hidden relative rounded-t-[20px]">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${course.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-white font-medium">学习进度</span>
                        <span className="text-xs text-white font-bold">{progress}%</span>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#667eea] to-[#764ba2] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="course-badge !mb-0">{course.category}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {getDifficultyLabel(course.difficulty)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.estimatedHours} 小时</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="h-4 w-4" />
                    <span>{course.chapters.length} 章节</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
