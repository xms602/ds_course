
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import Editor from '@monaco-editor/react';

export default function Learn() {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const navigate = useNavigate();
  const { courses, getCourseProgress, completeChapter, completeExercise } = useStore();
  
  const course = courses.find(c => c.id === courseId);
  const chapter = course?.chapters.find(ch => ch.id === chapterId);
  const courseProgress = getCourseProgress(courseId || '');
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
  const [isChapterCompleted, setIsChapterCompleted] = useState(
    courseProgress?.completedChapters.includes(chapterId || '') || false
  );
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodideLoading, setPyodideLoading] = useState(false);

  // 预加载Pyodide
  useEffect(() => {
    let mounted = true;
    const loadPyodide = async () => {
      if (!mounted || pyodideReady) return;
      setPyodideLoading(true);
      try {
        const { initPyodide } = await import('@/lib/pyodide');
        await initPyodide();
        if (mounted) {
          setPyodideReady(true);
        }
      } catch (error) {
        console.error('Pyodide加载失败:', error);
      } finally {
        if (mounted) {
          setPyodideLoading(false);
        }
      }
    };
    
    loadPyodide();
    return () => { mounted = false; };
  }, [pyodideReady]);

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

  const [userCode, setUserCode] = useState<{ [key: string]: string }>({});
  const [codeOutput, setCodeOutput] = useState<{ [key: string]: string }>({});
  const [isRunningCode, setIsRunningCode] = useState<{ [key: string]: boolean }>({});

  const handleExerciseAnswer = (exerciseId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const handleCodeChange = (exerciseId: string, code: string) => {
    setUserCode(prev => ({ ...prev, [exerciseId]: code }));
  };

  const runCode = async (exerciseId: string) => {
    const exercise = chapter.exercises.find(e => e.id === exerciseId);
    if (!exercise || !exercise.codeTemplate) return;

    setIsRunningCode(prev => ({ ...prev, [exerciseId]: true }));
    setCodeOutput(prev => ({ ...prev, [exerciseId]: '⏳ 正在初始化Python环境...' }));

    try {
      const { runPythonCode } = await import('@/lib/pyodide');
      setCodeOutput(prev => ({ ...prev, [exerciseId]: '🚀 执行中...' }));
      const result = await runPythonCode(userCode[exerciseId] || exercise.codeTemplate);
      if (result.success) {
        setCodeOutput(prev => ({ 
          ...prev, 
          [exerciseId]: result.result !== undefined && result.result !== null 
            ? String(result.result) 
            : '✅ 代码执行成功' 
        }));
      } else {
        setCodeOutput(prev => ({ ...prev, [exerciseId]: `❌ 错误: ${result.error}` }));
      }
    } catch (error: any) {
      setCodeOutput(prev => ({ ...prev, [exerciseId]: `❌ 执行错误: ${error.message || error}` }));
    } finally {
      setIsRunningCode(prev => ({ ...prev, [exerciseId]: false }));
    }
  };

  const checkExerciseAnswer = (exerciseId: string) => {
    const exercise = chapter.exercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    setShowExplanation(prev => ({ ...prev, [exerciseId]: true }));
    
    if (exercise.type === 'multiple-choice') {
      const isCorrect = selectedAnswers[exerciseId] === exercise.correctAnswer;
      if (isCorrect && !courseProgress?.completedChapters.includes(chapterId || '')) {
        completeExercise(course.id, chapterId || '', exerciseId);
      }
    } else if (exercise.type === 'coding') {
      if (!courseProgress?.completedChapters.includes(chapterId || '')) {
        completeExercise(course.id, chapterId || '', exerciseId);
      }
    }
  };

  const handleCompleteChapter = () => {
    if (!isChapterCompleted) {
      completeChapter(chapter.id);
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
                    const isCompleted = courseProgress?.completedChapters.includes(chapterId || '');
                    const userAnswer = selectedAnswers[exercise.id];
                    const showExp = showExplanation[exercise.id];
                    const isCorrect = userAnswer === exercise.correctAnswer;
                    const code = userCode[exercise.id] || exercise.codeTemplate;
                    const output = codeOutput[exercise.id];
                    const running = isRunningCode[exercise.id];

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

                        {exercise.type === 'coding' && exercise.codeTemplate && (
                          <div className="space-y-4">
                            {/* Pyodide状态提示 */}
                            {(pyodideLoading || !pyodideReady) && (
                              <div className="flex items-center gap-2 p-3 bg-yellow-50 text-yellow-700 rounded-lg">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span className="text-sm">
                                  {pyodideLoading ? '正在加载Python环境...' : '准备Python环境中，请稍候...'}
                                </span>
                              </div>
                            )}
                            
                            <div className="bg-gray-50 rounded-lg p-1 border border-gray-200">
                              <Editor
                                height="400px"
                                language="python"
                                value={code}
                                onChange={(newValue) => handleCodeChange(exercise.id, newValue || '')}
                                options={{
                                  minimap: { enabled: false },
                                  lineNumbers: 'on',
                                  scrollBeyondLastLine: false,
                                  fontSize: 14,
                                  tabSize: 4,
                                  automaticLayout: true,
                                  readOnly: !pyodideReady
                                }}
                              />
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => runCode(exercise.id)}
                                disabled={running || !pyodideReady}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                              >
                                {running ? (
                                  <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    运行中...
                                  </>
                                ) : (
                                  '运行代码'
                                )}
                              </button>
                              <button
                                onClick={() => checkExerciseAnswer(exercise.id)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                标记完成
                              </button>
                            </div>
                            {output && (
                              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                                <pre className="text-sm whitespace-pre-wrap text-green-400">{output}</pre>
                              </div>
                            )}
                          </div>
                        )}

                        {exercise.type === 'multiple-choice' && !showExp && userAnswer && (
                          <button
                            onClick={() => checkExerciseAnswer(exercise.id)}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            检查答案
                          </button>
                        )}

                        {showExp && exercise.type === 'multiple-choice' && (
                          <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            <p className="font-medium mb-2">{isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}</p>
                            <p className="text-sm">{exercise.explanation}</p>
                          </div>
                        )}

                        {showExp && exercise.type === 'coding' && exercise.correctCode && (
                          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                            <p className="font-medium mb-2">参考解答：</p>
                            <pre className="text-sm bg-white p-3 rounded-lg overflow-x-auto">{exercise.correctCode}</pre>
                            <p className="mt-3 text-sm">{exercise.explanation}</p>
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
