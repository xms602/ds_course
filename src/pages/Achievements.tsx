
import { Trophy, Lock, Unlock } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Achievements() {
  const { achievements, getUnlockedAchievements } = useStore();
  const unlockedAchievements = getUnlockedAchievements();
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">成就系统</h1>
        <p className="text-gray-600">解锁成就，记录您的学习历程</p>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl shadow-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">成就统计</h2>
            <p className="text-orange-100">继续努力，解锁更多成就！</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">
              {unlockedAchievements.length}
              <span className="text-2xl text-orange-200">/{achievements.length}</span>
            </div>
            <p className="text-orange-100">已解锁成就</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>完成进度</span>
            <span>{Math.round((unlockedAchievements.length / achievements.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${(unlockedAchievements.length / achievements.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {unlockedAchievements.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Unlock className="h-6 w-6 text-green-500" />
            已解锁成就
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unlockedAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                {achievement.unlockedAt && (
                  <p className="text-xs text-gray-400">
                    解锁于 {new Date(achievement.unlockedAt).toLocaleDateString('zh-CN')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {lockedAchievements.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lock className="h-6 w-6 text-gray-400" />
            待解锁成就
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lockedAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gray-50 rounded-xl shadow-md p-6 border-2 border-gray-200 opacity-60"
              >
                <div className="text-5xl mb-4 grayscale">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-500 mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
