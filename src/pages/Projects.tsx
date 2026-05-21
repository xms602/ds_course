import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, ChevronRight, Filter } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { useStore } from '@/store/useStore';

export default function Projects() {
  const { getProjectProgress } = useStore();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Python数据分析实战项目
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          10个梯度项目，从基础到高级，系统提升数据分析能力
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => {
          const progress = getProjectProgress(project.id);
          const difficultyColors = {
            beginner: 'bg-green-100 text-green-700',
            intermediate: 'bg-blue-100 text-blue-700',
            advanced: 'bg-purple-100 text-purple-700'
          };
          
          return (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {progress && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    已完成
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[project.difficulty]}`}>
                    {project.difficulty === 'beginner' ? '初级' : project.difficulty === 'intermediate' ? '中级' : '高级'}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{project.estimatedHours} 小时</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {index + 1}. {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Award className="h-4 w-4" />
                    <span>{project.tasks.length} 个任务</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>开始学习</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
