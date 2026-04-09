
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Learn() {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const navigate = useNavigate();
  const { courses, userProgress, completeChapter, completeExercise } = useStore();
  
  const course = courses.find(c => c.id === courseId);
  const chapter = course?.chapters.find(ch => ch.id === chapterId);
  const courseProgress = userProgress.find(p => p.courseId === courseId);
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
  const [isChapterCompleted, setIsChapterCompleted] = useState(
    courseProgress?.completedChapters.includes(chapterId || '') || false
  );

  if (!course || !chapter) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">页面未找到</h2>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700">
            返回课程列表
          </Link>
        </div>
      </div>
    );
  }

  const currentChapterIndex = course.chapters.findIndex(ch => ch.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? course.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < course.chapters.length - 1 ? course.chapters[currentChapterIndex + 1] : null;

  const handleExerciseAnswer = (exerciseId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const checkExerciseAnswer = (exerciseId: string) => {
    const exercise = chapter.exercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    setShowExplanation(prev => ({ ...prev, [exerciseId]: true }));
    
    const isCorrect = selectedAnswers[exerciseId] === exercise.correctAnswer;
    if (isCorrect && !courseProgress?.completedExercises.includes(exerciseId)) {
      completeExercise(course.id, exerciseId);
    }
  };

  const handleCompleteChapter = () => {
    if (!isChapterCompleted) {
      completeChapter(course.id, chapter.id);
      setIsChapterCompleted(true);
    }
  };

  const renderContent = () => {
    const lines = chapter.content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-6">{line.slice(3)}</h2>;
      } else if (line.trim().startsWith('- ')) {
        return <li key={index} className="ml-4 mb-2 text-gray-700">{line.slice(2)}</li>;
      } else if (line.trim()) {
        return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          返回课程详情
        </Link>
        <div className="flex items-center gap-2">
          {prevChapter && (
            <Link
              to={`/learn/${course.id}/${prevChapter.id}`}
              className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              上一章
            </Link>
          )}
          {nextChapter && (
            <Link
              to={`/learn/${course.id}/${nextChapter.id}`}
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              下一章
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{course.title}</h3>
            <div className="space-y-2">
              {course.chapters.map((ch, index) => {
                const isCompleted = courseProgress?.completedChapters.includes(ch.id);
                const isCurrent = ch.id === chapter.id;
                return (
                  <Link
                    key={ch.id}
                    to={`/learn/${course.id}/${ch.id}`}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isCurrent
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${
                      isCompleted ? 'bg-green-500 text-white' : isCurrent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-4 w-4" /> : index + 1}
                    </div>
                    <span className="text-sm font-medium truncate">{ch.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{chapter.title}</h1>
              <div className="prose max-w-none">{renderContent()}</div>
            </div>

            {chapter.exercises.length > 0 && (
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">互动练习</h2>
                <div className="space-y-6">
                  {chapter.exercises.map((exercise, index) => {
                    const isCompleted = courseProgress?.completedExercises.includes(exercise.id);
                    const userAnswer = selectedAnswers[exercise.id];
                    const showExp = showExplanation[exercise.id];
                    const isCorrect = userAnswer === exercise.correctAnswer;

                    return (
                      <div key={exercise.id} className={`p-6 rounded-xl border ${isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            练习 {index + 1}: {exercise.question}
                          </h3>
                          {isCompleted && (
                            <span className="flex items-center gap-1 text-green-600 font-medium">
                              <CheckCircle className="h-4 w-4" />
                              已完成
                            </span>
                          )}
                        </div>

                        {exercise.type === 'multiple-choice' && exercise.options && (
                          <div className="space-y-3">
                            {exercise.options.map((option, optIndex) => (
                              <button
                                key={optIndex}
                                onClick={() => !showExp && handleExerciseAnswer(exercise.id, option)}
                                disabled={showExp}
                                className={`w-full text-left p-4 rounded-lg border transition-all ${
                                  showExp
                                    ? option === exercise.correctAnswer
                                      ? 'border-green-500 bg-green-50'
                                      : userAnswer === option
                                      ? 'border-red-500 bg-red-50'
                                      : 'border-gray-200 opacity-50'
                                    : userAnswer === option
                                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                }`}
                              >
                                {String.fromCharCode(65 + optIndex)}. {option}
                              </button>
                            ))}
                          </div>
                        )}

                        {!showExp && userAnswer && (
                          <button
                            onClick={() => checkExerciseAnswer(exercise.id)}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            检查答案
                          </button>
                        )}

                        {showExp && (
                          <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            <p className="font-medium mb-2">{isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}</p>
                            <p className="text-sm">{exercise.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t flex justify-between items-center">
              {!isChapterCompleted && (
                <button
                  onClick={handleCompleteChapter}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="h-5 w-5" />
                  标记章节完成
                </button>
              )}
              {isChapterCompleted && (
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <CheckCircle className="h-5 w-5" />
                  本章已完成
                </div>
              )}
              {nextChapter && (
                <Link
                  to={`/learn/${course.id}/${nextChapter.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  继续学习
                  <ChevronRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
