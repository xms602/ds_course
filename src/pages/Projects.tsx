
import { Link } from 'react-router-dom';
import { Clock, Award, ChevronRight, Database, Sparkles, BarChart3, Target, TrendingUp } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { useStore } from '@/store/useStore';

export default function Projects() {
  const { getProjectProgress } = useStore();

  const difficultyConfig = {
    beginner: { label: '初级', bg: 'bg-green-100', text: 'text-green-700', ring: 'ring-green-200' },
    intermediate: { label: '中级', bg: 'bg-blue-100', text: 'text-blue-700', ring: 'ring-blue-200' },
    advanced: { label: '高级', bg: 'bg-purple-100', text: 'text-purple-700', ring: 'ring-purple-200' }
  };

  return (
    <div>
      {/* 页头卡片 */}
      <div className="page-header-card">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-200">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500">PROJECTS · 实战演练</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Python 数据分析实战项目</h1>
          </div>
        </div>
        <p className="text-gray-600 max-w-2xl mb-5">
          共 {projectsData.length} 个梯度项目，从基础数据探索到复杂业务分析，使用 Pandas / NumPy / Matplotlib 完成真实场景任务。
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-200">
              <Database className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">{projectsData.length}</div>
              <div className="text-xs text-gray-600">实战项目</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md shadow-green-200">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">{projectsData.reduce((s, p) => s + p.tasks.length, 0)}</div>
              <div className="text-xs text-gray-600">任务总数</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 border border-[#667eea]/20 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-200">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">浏览器中运行</div>
              <div className="text-xs text-gray-600">无需本地环境</div>
            </div>
          </div>
        </div>
      </div>

      {/* 项目卡片列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => {
          const isCompleted = getProjectProgress(project.id);
          const config = difficultyConfig[project.difficulty];
          return (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="course-card !mb-0 !p-0 block group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* 封面图 */}
              <div className="h-44 relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.text}`}>
                    {config.label}
                  </span>
                </div>
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-green-200 flex items-center gap-1">
                    <Award className="h-3 w-3" /> 已完成
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs opacity-80 mb-1">Project {String(index + 1).padStart(2, '0')}</div>
                  <div className="text-lg font-bold leading-tight">{project.title}</div>
                </div>
              </div>

              {/* 内容区 */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{project.estimatedHours} 小时</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-3.5 w-3.5" />
                    <span>{project.tasks.length} 个任务</span>
                  </div>
                </div>

                {/* 进度条 */}
                {isCompleted && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1 text-xs">
                      <span className="text-gray-500 font-medium">进度</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full transition-all"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-600">开始实战</span>
                  <span className="flex items-center gap-1 text-[#667eea] text-sm font-bold group-hover:translate-x-1 transition-transform">
                    进入
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
