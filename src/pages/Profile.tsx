
import { Link } from 'react-router-dom';
import { User, BookOpen, Trophy, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Profile() {
  const { 
    courses, 
    userProgress, 
    getTotalProgress, 
    getUnlockedAchievements,
    getCourseProgress 
  } = useStore();
  
  const totalProgress = getTotalProgress();
  const unlockedAchievements = getUnlockedAchievements();
  
  const coursesInProgress = courses.filter(course => {
    const progress = getCourseProgress(course.id);
    return progress > 0 && progress < 100;
  });
  
  const completedCourses = courses.filter(course => getCourseProgress(course.id) === 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">学习者</h1>
              <p className="text-blue-100">商务数据分析与应用专业</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">{totalProgress}%</div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <TrendingUp className="h-4 w-4" />
              总体进度
            </div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">{completedCourses.length}</div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <BookOpen className="h-4 w-4" />
              完成课程
            </div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-4xl font-bold text-orange-600 mb-2">{unlockedAchievements.length}</div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Trophy className="h-4 w-4" />
              解锁成就
            </div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {courses.reduce((total, course) => {
                const progress = getCourseProgress(course.id);
                return total + Math.round(course.estimatedHours * (progress / 100));
              }, 0)}
            </div>
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Clock className="h-4 w-4" />
              学习小时
            </div>
          </div>
        </div>
      </div>

      {coursesInProgress.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">进行中的课程</h2>
            <Link to="/courses" className="text-blue-600 hover:text-blue-700 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coursesInProgress.map((course) => {
              const progress = getCourseProgress(course.id);
              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="flex">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                        {course.title}
                      </h3>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">学习进度</span>
                          <span className="font-medium text-blue-600">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.chapters.length} 章节 · {course.estimatedHours} 小时
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {completedCourses.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">已完成课程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-green-200"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    已完成
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <Link
                    to={`/learn/${course.id}/${course.chapters[0]?.id}`}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    复习课程
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          to="/achievements"
          className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl shadow-md p-8 text-white hover:shadow-lg transition-shadow"
        >
          <Trophy className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">查看成就</h3>
          <p className="text-orange-100">查看您解锁的所有成就</p>
        </Link>
        <Link
          to="/courses"
          className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-md p-8 text-white hover:shadow-lg transition-shadow"
        >
          <BookOpen className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-bold mb-2">浏览课程</h3>
          <p className="text-blue-100">发现更多精彩课程</p>
        </Link>
      </div>
    </div>
  );
}
