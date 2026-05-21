
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const { courses, getCourseProgress } = useStore();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">课程未找到</h2>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700">
            返回课程列表
          </Link>
        </div>
      </div>
    );
  }

  const courseProgress = getCourseProgress(course.id);
  const progress = Math.round((courseProgress.completedChapters.length / course.chapters.length) * 100);

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '初级';
      case 'intermediate': return '中级';
      case 'advanced': return '高级';
      default: return difficulty;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        返回课程列表
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {getDifficultyLabel(course.difficulty)}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{course.description}</p>
              <div className="flex items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.estimatedHours} 小时</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{course.chapters.length} 章节</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">课程章节</h2>
            <div className="space-y-4">
              {course.chapters.map((chapter, index) => {
                const isCompleted = courseProgress?.completedChapters.includes(chapter.id);
                return (
                  <Link
                    key={chapter.id}
                    to={`/learn/${course.id}/${chapter.id}`}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {chapter.exercises.length} 道练习 · {chapter.quiz.length} 道测试题
                      </p>
                    </div>
                    {isCompleted && (
                      <span className="text-green-600 text-sm font-medium">已完成</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">学习进度</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">总体进度</span>
                <span className="font-medium text-gray-900">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">已完成章节</span>
                <span className="font-medium text-gray-900">
                  {courseProgress.completedChapters.length || 0} / {course.chapters.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">测验得分</span>
                <span className="font-medium text-gray-900">
                  {Object.keys(courseProgress.quizScores).length} 次
                </span>
              </div>
            </div>
            {course.chapters.length > 0 && (
              <Link
                to={`/learn/${course.id}/${course.chapters[0].id}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                开始学习
              </Link>
            )}
            {progress > 0 && (
              <Link
                to={`/quiz/${course.id}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-xl text-blue-600 bg-white hover:bg-blue-50 transition-colors mt-3"
              >
                参加测评
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
