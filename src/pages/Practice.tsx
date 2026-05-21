
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, CheckCircle } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Practice() {
  const { courses, getCourseProgress } = useStore();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [practiceType, setPracticeType] = useState<'all' | 'exercises' | 'quizzes'>('all');

  // 获取所有练习
  const getAllExercises = () => {
    let allExercises: Array<{
      courseId: string;
      courseTitle: string;
      chapterId: string;
      chapterTitle: string;
      id: string;
      type: string;
      question: string;
      isCompleted: boolean;
    }> = [];

    courses.forEach(course => {
      const courseProgress = getCourseProgress(course.id);
      course.chapters.forEach(chapter => {
        chapter.exercises.forEach(exercise => {
          const isCompleted = courseProgress.completedChapters.includes(chapter.id);
          allExercises.push({
            courseId: course.id,
            courseTitle: course.title,
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            id: exercise.id,
            type: exercise.type,
            question: exercise.question,
            isCompleted
          });
        });

        chapter.quiz.forEach(quizItem => {
          const isCompleted = courseProgress.completedChapters.includes(chapter.id);
          allExercises.push({
            courseId: course.id,
            courseTitle: course.title,
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            id: quizItem.id,
            type: 'quiz',
            question: quizItem.question,
            isCompleted
          });
        });
      });
    });

    return allExercises;
  };

  const allExercises = getAllExercises();

  // 筛选练习
  const filteredExercises = allExercises.filter(exercise => {
    if (selectedCourseId && exercise.courseId !== selectedCourseId) return false;
    if (selectedChapterId && exercise.chapterId !== selectedChapterId) return false;
    if (practiceType === 'exercises' && exercise.type === 'quiz') return false;
    if (practiceType === 'quizzes' && exercise.type !== 'quiz') return false;
    return true;
  });

  const getSelectedCourse = () => {
    if (!selectedCourseId) return null;
    return courses.find(c => c.id === selectedCourseId);
  };

  const getSelectedChapter = () => {
    const course = getSelectedCourse();
    if (!course || !selectedChapterId) return null;
    return course.chapters.find(ch => ch.id === selectedChapterId);
  };

  const completedCount = allExercises.filter(e => e.isCompleted).length;
  const totalCount = allExercises.length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">练习中心</h1>
        <p className="text-gray-600 mb-6">
          选择课程和章节，开始练习吧！
        </p>

        {/* 进度概览 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">练习进度</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">总体进度</span>
              <span className="font-medium text-gray-900">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{completedCount}</div>
              <div className="text-sm text-gray-600">已完成</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">{totalCount}</div>
              <div className="text-sm text-gray-600">总练习</div>
            </div>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">筛选练习</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* 课程筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">课程</label>
              <select
                value={selectedCourseId || ''}
                onChange={(e) => {
                  setSelectedCourseId(e.target.value || null);
                  setSelectedChapterId(null);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">全部课程</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </select>
            </div>

            {/* 章节筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">章节</label>
              <select
                value={selectedChapterId || ''}
                onChange={(e) => setSelectedChapterId(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={!selectedCourseId}
              >
                <option value="">全部章节</option>
                {getSelectedCourse()?.chapters.map(chapter => (
                  <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
                ))}
              </select>
            </div>

            {/* 类型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">类型</label>
              <select
                value={practiceType}
                onChange={(e) => setPracticeType(e.target.value as 'all' | 'exercises' | 'quizzes')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">全部类型</option>
                <option value="exercises">互动练习</option>
                <option value="quizzes">章节测验</option>
              </select>
            </div>

            {/* 状态筛选 */}
            <div className="flex items-end">
              <div className="flex gap-2">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-green-50 text-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {completedCount} 已完成
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 练习列表 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {getSelectedChapter() 
            ? `${getSelectedCourse()?.title} - ${getSelectedChapter()?.title}` 
            : getSelectedCourse() 
              ? getSelectedCourse()?.title 
              : '全部练习'
          }
          <span className="text-gray-500 text-sm font-normal ml-2">
            ({filteredExercises.length} 道)
          </span>
        </h2>

        {filteredExercises.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">没有找到符合条件的练习</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredExercises.map(exercise => (
              <Link
                key={exercise.id}
                to={`/learn/${exercise.courseId}/${exercise.chapterId}`}
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  exercise.isCompleted 
                    ? 'bg-green-100 text-green-600' 
                    : exercise.type === 'quiz' 
                      ? 'bg-purple-100 text-purple-600' 
                      : 'bg-blue-100 text-blue-600'
                }`}>
                  {exercise.isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Code className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {exercise.courseTitle}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                      {exercise.chapterTitle}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-600">
                      {exercise.type === 'quiz' ? '测验' : '练习'}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                    {exercise.question}
                  </h3>
                </div>
                {exercise.isCompleted && (
                  <span className="text-green-600 text-sm font-medium flex-shrink-0">已完成</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
