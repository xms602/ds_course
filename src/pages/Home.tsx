
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Trophy, Users } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Home() {
  const { courses, getTotalProgress, getUnlockedAchievements } = useStore();
  const totalProgress = getTotalProgress();
  const unlockedAchievements = getUnlockedAchievements();

  const features = [
    {
      icon: BookOpen,
      title: '完整课程体系',
      description: '从基础到进阶，系统化学习商务数据分析'
    },
    {
      icon: TrendingUp,
      title: '互动式学习',
      description: '学练结合，实时反馈学习效果'
    },
    {
      icon: Trophy,
      title: '成就激励',
      description: '解锁成就，获得学习动力'
    },
    {
      icon: Users,
      title: '专业导向',
      description: '专为商务数据分析专业设计'
    }
  ];

  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              商务数据分析在线学习平台
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              专为商务数据分析与应用专业学生打造，系统化掌握数据分析技能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                开始学习
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-xl text-white hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                查看成就
              </Link>
            </div>
          </div>
        </div>
      </section>

      {totalProgress > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">学习进度</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{totalProgress}%</div>
                <div className="text-gray-600">总体进度</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">{unlockedAchievements.length}</div>
                <div className="text-gray-600">解锁成就</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">{courses.filter(c => getTotalProgress() > 0).length}</div>
                <div className="text-gray-600">进行中课程</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">平台特色</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">热门课程</h2>
          <Link
            to="/courses"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '高级'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{course.estimatedHours} 小时</span>
                  <span>{course.chapters.length} 章节</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
