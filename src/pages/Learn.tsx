
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft, Loader2, Code2, Sparkles, Trophy } from 'lucide-react';
import { useStore } from '@/store/useStore';
import Editor from '@monaco-editor/react';

export default function Learn() {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const { courses, getCourseProgress, completeChapter, completeExercise } = useStore();

  const course = courses.find(c => c.id === courseId);
  const chapter = course?.chapters.find(ch => ch.id === chapterId);
  const courseProgress = getCourseProgress(courseId || '');
  const courseNumber = course?.courseNumber || 1;

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
  const [isChapterCompleted, setIsChapterCompleted] = useState(
    courseProgress?.completedChapters.includes(chapterId || '') || false
  );
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodideLoading, setPyodideLoading] = useState(false);
  const [pyodideError, setPyodideError] = useState<string | null>(null);

  const [userCode, setUserCode] = useState<{ [key: string]: string }>({});
  const [codeOutput, setCodeOutput] = useState<{ [key: string]: string }>({});
  const [chartImage, setChartImage] = useState<{ [key: string]: string }>({});
  const [isRunningCode, setIsRunningCode] = useState<{ [key: string]: boolean }>({});

  // 预加载 Pyodide（仅执行一次，避免重复初始化）
  useEffect(() => {
    let mounted = true;
    let cancelled = false;

    const loadPyodide = async () => {
      if (pyodideReady) return;
      setPyodideLoading(true);
      setPyodideError(null);
      try {
        const { initPyodide } = await import('@/lib/pyodide');
        const py = await initPyodide();
        if (!mounted || cancelled) return;
        if (py) {
          setPyodideReady(true);
        } else {
          setPyodideError('Python 环境初始化失败，请刷新页面重试');
        }
      } catch (error: any) {
        console.error('[Pyodide] 加载失败:', error);
        if (!mounted || cancelled) return;
        setPyodideError(
          '加载失败: ' + (error?.message || String(error)) +
          '。请确认网络能访问 cdn.jsdelivr.net，然后刷新页面。'
        );
      } finally {
        if (mounted && !cancelled) {
          setPyodideLoading(false);
        }
      }
    };
    loadPyodide();
    return () => {
      mounted = false;
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!course || !chapter) {
    return (
      <div className="course-card text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">页面未找到</h2>
        <Link to="/courses" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
          <ArrowLeft className="h-4 w-4" />
          返回课程列表
        </Link>
      </div>
    );
  }

  const currentChapterIndex = course.chapters.findIndex(ch => ch.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? course.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < course.chapters.length - 1 ? course.chapters[currentChapterIndex + 1] : null;

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
    setCodeOutput(prev => ({ ...prev, [exerciseId]: '⏳ 正在初始化 Python 环境...' }));
    setChartImage(prev => ({ ...prev, [exerciseId]: '' }));

    try {
      const { runPythonWithChart } = await import('@/lib/pyodide');
      setCodeOutput(prev => ({ ...prev, [exerciseId]: '🚀 执行中...' }));

      const code = userCode[exerciseId] || exercise.codeTemplate;
      const result = await runPythonWithChart(code);

      if (result.success) {
        setCodeOutput(prev => ({ ...prev, [exerciseId]: result.result }));
        if (result.chartData) {
          setChartImage(prev => ({ ...prev, [exerciseId]: result.chartData }));
        }
      } else {
        setCodeOutput(prev => ({
          ...prev,
          [exerciseId]: `❌ 错误: ${result.error || result.result}`
        }));
      }
    } catch (error: any) {
      setCodeOutput(prev => ({
        ...prev,
        [exerciseId]: `❌ 执行错误: ${error.message || error}`
      }));
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
      if (isCorrect && !isChapterCompleted) {
        completeExercise(course.id, chapterId || '', exerciseId);
      }
    } else if (exercise.type === 'coding') {
      if (!isChapterCompleted) {
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
    const elements = [];
    let listItems = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('```python') || line.startsWith('```') || line.startsWith('```json')) {
        // 跳过代码块起止符 - 代码块在 Learn 中用 Monaco 另作处理
        continue;
      }

      if (line.startsWith('# ')) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        elements.push(<h1 key={i} className="course-title-bar">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        elements.push(<h2 key={i} className="section-title">{line.slice(3)}</h2>);
      } else if (line.trim().startsWith('- ')) {
        listItems.push(<li key={i}>{line.trim().slice(2)}</li>);
      } else if (line.trim()) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        elements.push(<p key={i} className="mb-4 text-gray-700 leading-relaxed text-[15px]">{line}</p>);
      }
    }
    if (listItems.length > 0) {
      elements.push(
        <ul key="ul-end" className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          {listItems}
        </ul>
      );
    }
    return elements;
  };

  return (
    <div className="space-y-6">
      {/* 顶部导航 - 独立 course-card 结构 */}
      <div className="course-card" id={`course${courseNumber}-nav`} data-course-id={courseNumber}>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:text-[#667eea] border border-gray-200 hover:border-[#667eea]/30 hover:bg-[#667eea]/5 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            返回课程详情
          </Link>
          <div className="flex items-center gap-2">
            {prevChapter && (
              <Link
                to={`/learn/${course.id}/${prevChapter.id}`}
                className="flex items-center gap-1 px-4 py-2 bg-white rounded-xl text-gray-700 hover:text-[#667eea] border border-gray-200 hover:border-[#667eea]/30 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
                上一章
              </Link>
            )}
            {nextChapter && (
              <Link
                to={`/learn/${course.id}/${nextChapter.id}`}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-purple-300/50 transition-all"
              >
                下一章
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* 左侧章节导航 - 独立 course-card 结构 */}
        <div className="lg:col-span-1">
          <div className="course-card" id={`course${courseNumber}-chapters`} data-course-id={courseNumber}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{course.title}</h3>
            <div className="space-y-2">
              {course.chapters.map((ch, index) => {
                const isCompleted = (courseProgress?.completedChapters || []).includes(ch.id);
                const isCurrent = ch.id === chapter.id;
                return (
                  <Link
                    key={ch.id}
                    to={`/learn/${course.id}/${ch.id}`}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] border border-[#667eea]/20'
                        : isCompleted
                        ? 'hover:bg-green-50 text-green-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      isCompleted
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-md shadow-green-200'
                        : isCurrent
                        ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white shadow-md shadow-purple-200'
                        : 'bg-gray-100 text-gray-500'
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

        {/* 右侧主内容区 */}
        <div className="lg:col-span-3 space-y-6">

          {/* 课程导航菜单 - 跨课程快速跳转（锚点式） */}
          <div className="course-card" id={`courseNav-${courseNumber}`} data-course-id={courseNumber}>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
              <div className="font-semibold text-gray-700 text-sm">🚀 课程快速导航 · 第 {courseNumber} 门 / 共 {courses.length} 门</div>
            </div>
            {/* 锚点导航 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              {courses.map((c, idx) => {
                const n = idx + 1;
                const isCurrent = c.id === courseId;
                return (
                  <a
                    key={c.id}
                    href={`#course${n}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(`course${n}`);
                      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    style={{
                      background: isCurrent ? "#667eea" : "#f3f4f6",
                      color: isCurrent ? "white" : "#374151",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 500,
                      boxShadow: isCurrent ? "0 2px 6px rgba(102,126,234,0.35)" : "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                  >
                    {n}.{c.title}
                  </a>
                );
              })}
            </div>
            {/* 跨页导航（直接跳转到对应课程的第一章） */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px", borderTop: "1px solid #e5e7eb", paddingTop: "10px" }}>
              <span style={{ fontSize: "12px", color: "#6b7280", alignSelf: "center" }}>📖 前往课程详情页：</span>
              {courses.map((c, idx) => {
                const n = idx + 1;
                return (
                  <Link
                    key={`goto-${c.id}`}
                    to={`/courses/${c.id}`}
                    style={{
                      background: "#eef2ff",
                      color: "#4338ca",
                      padding: "5px 10px",
                      borderRadius: "16px",
                      textDecoration: "none",
                      fontSize: "12px",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {n}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 章节内容卡片 - 独立 course-card 结构 */}
          <div className="course-card" id={`course${courseNumber}`} data-course-id={courseNumber}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-purple-200">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">章节 {currentChapterIndex + 1} / {course.chapters.length}</div>
                  <div className="text-sm text-gray-400">{course.title}</div>
                </div>
              </div>
              {isChapterCompleted && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-50 text-green-700 text-sm font-medium border border-green-100">
                  <Trophy className="h-4 w-4" />
                  已完成
                </div>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">{chapter.title}</h1>
            <div className="prose max-w-none">{renderContent()}</div>
          </div>

          {/* 练习区 - 独立 course-card 结构 */}
          {chapter.exercises.length > 0 && (
            <div className="course-card" id={`course${courseNumber}-exercises`} data-course-id={courseNumber}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-200">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">互动练习 · 共 {chapter.exercises.length} 道</h2>
              </div>
              <div className="space-y-5">
                {chapter.exercises.map((exercise, index) => {
                  const userAnswer = selectedAnswers[exercise.id];
                  const showExp = showExplanation[exercise.id];
                  const isCorrect = userAnswer === exercise.correctAnswer;
                  const code = userCode[exercise.id] || exercise.codeTemplate;
                  const output = codeOutput[exercise.id];
                  const running = isRunningCode[exercise.id];

                  return (
                    <div
                      key={exercise.id}
                      className={`p-6 rounded-2xl border transition-all ${
                        showExp && isCorrect
                          ? 'border-green-300 bg-gradient-to-br from-green-50/80 to-emerald-50/50 shadow-green-100'
                          : showExp && exercise.type === 'multiple-choice'
                          ? 'border-orange-300 bg-gradient-to-br from-orange-50/80 to-yellow-50/50'
                          : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-xs font-medium text-gray-400 mb-1">练习 {index + 1} · {exercise.type === 'multiple-choice' ? '选择题' : '编程练习'}</div>
                          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                            {exercise.question}
                          </h3>
                        </div>
                        {showExp && isCorrect && (
                          <span className="flex items-center gap-1 text-green-600 font-medium text-sm bg-green-100 px-3 py-1 rounded-lg">
                            <CheckCircle className="h-4 w-4" />
                            正确
                          </span>
                        )}
                      </div>

                      {/* 选择题 */}
                      {exercise.type === 'multiple-choice' && exercise.options && (
                        <div className="space-y-3">
                          {exercise.options.map((option, optIndex) => {
                            const isSelected = userAnswer === option;
                            const isCorrectOption = option === exercise.correctAnswer;
                            let optionClass = 'border-gray-200 hover:border-[#667eea]/50 hover:bg-[#667eea]/5';
                            if (showExp) {
                              if (isCorrectOption) {
                                optionClass = 'border-green-500 bg-green-50 ring-2 ring-green-200 shadow-md shadow-green-100';
                              } else if (isSelected && !isCorrectOption) {
                                optionClass = 'border-red-500 bg-red-50 ring-2 ring-red-200';
                              } else {
                                optionClass = 'border-gray-200 opacity-60';
                              }
                            } else if (isSelected) {
                              optionClass = 'border-[#667eea] bg-[#667eea]/5 ring-2 ring-[#667eea]/20 shadow-md shadow-purple-100';
                            }
                            return (
                              <button
                                key={optIndex}
                                onClick={() => !showExp && handleExerciseAnswer(exercise.id, option)}
                                disabled={showExp}
                                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${optionClass}`}
                              >
                                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                                  showExp && isCorrectOption
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white'
                                    : showExp && isSelected && !isCorrectOption
                                    ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white'
                                    : isSelected && !showExp
                                    ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {String.fromCharCode(65 + optIndex)}
                                </span>
                                <span className="text-gray-800 text-[15px] font-medium">{option}</span>
                              </button>
                            );
                          })}

                          {/* 检查答案按钮 */}
                          {!showExp && userAnswer && (
                            <button
                              onClick={() => checkExerciseAnswer(exercise.id)}
                              className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-purple-300/50 transition-all font-medium"
                            >
                              <CheckCircle className="h-4 w-4" />
                              检查答案
                            </button>
                          )}

                          {/* 答案解析 */}
                          {showExp && (
                            <div className={`mt-4 p-4 rounded-xl ${
                              isCorrect
                                ? 'bg-gradient-to-br from-green-100 to-emerald-50 text-green-900 border border-green-200'
                                : 'bg-gradient-to-br from-orange-100 to-yellow-50 text-orange-900 border border-orange-200'
                            }`}>
                              <div className={`font-bold mb-2 flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                                {isCorrect ? '✓ 回答正确！' : '✗ 回答错误，让我们看看正确答案'}
                              </div>
                              {exercise.explanation && (
                                <div className="text-sm leading-relaxed text-gray-700">
                                  <div className="font-medium mb-1 text-gray-800">解析：</div>
                                  {exercise.explanation}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* 编程练习 */}
                      {exercise.type === 'coding' && exercise.codeTemplate && (
                        <div className="space-y-4">
                          {/* Python 环境状态提示（加载中 / 失败 / 就绪） */}
                          {pyodideError && (
                            <div className="p-4 bg-red-50 text-red-800 rounded-xl border border-red-200">
                              <div className="flex items-start gap-3">
                                <div className="text-lg font-bold">⚠️ Python 环境初始化失败</div>
                              </div>
                              <div className="mt-2 text-sm">{pyodideError}</div>
                              <button
                                onClick={() => {
                                  setPyodideError(null);
                                  setPyodideLoading(true);
                                  import('@/lib/pyodide')
                                    .then(m => m.initPyodide())
                                    .then(() => setPyodideReady(true))
                                    .catch(e => setPyodideError(String(e?.message || e)))
                                    .finally(() => setPyodideLoading(false));
                                }}
                                className="mt-3 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-all"
                              >
                                🔄 重新初始化
                              </button>
                            </div>
                          )}

                          {(pyodideLoading || (!pyodideReady && !pyodideError)) && (
                            <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-200">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              <div>
                                <div className="text-sm font-medium">正在加载 Python 环境...</div>
                                <div className="text-xs mt-1 text-blue-700/80">首次加载需下载 pandas/numpy/matplotlib 等库（约 30MB），请耐心等待</div>
                              </div>
                            </div>
                          )}

                          {/* 代码编辑器 */}
                          <div className="rounded-xl overflow-hidden border-2 border-gray-800 shadow-xl">
                            <div className="flex items-center gap-2 bg-gray-900 px-4 py-2.5 border-b border-gray-700">
                              <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                              </div>
                              <div className="text-gray-400 text-xs font-medium ml-3">Python · {exercise.id}.py</div>
                            </div>
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
                                readOnly: !pyodideReady,
                                theme: 'vs-dark',
                                padding: { top: 12, bottom: 12 }
                              }}
                            />
                          </div>

                          {/* 操作按钮 */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <button
                              onClick={() => runCode(exercise.id)}
                              disabled={running || !pyodideReady}
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-300/50 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {running ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  运行中...
                                </>
                              ) : (
                                <>
                                  <Code2 className="h-4 w-4" />
                                  ▶ 运行代码
                                </>
                              )}
                            </button>
                            <button
                              onClick={() => {
                                handleCodeChange(exercise.id, exercise.codeTemplate || '');
                                setCodeOutput(prev => { const next = { ...prev }; delete next[exercise.id]; return next; });
                                setChartImage(prev => { const next = { ...prev }; delete next[exercise.id]; return next; });
                              }}
                              className="px-4 py-2.5 rounded-xl text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all font-medium text-sm"
                            >
                              重置代码
                            </button>
                            {!showExp && (
                              <button
                                onClick={() => checkExerciseAnswer(exercise.id)}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#667eea] bg-white border-2 border-[#667eea]/20 hover:border-[#667eea] hover:bg-[#667eea]/5 transition-all font-medium text-sm"
                              >
                                <CheckCircle className="h-4 w-4" />
                                标记完成
                              </button>
                            )}
                          </div>

                          {/* 代码输出 */}
                          {output && (
                            <div className="p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-lg">
                              <div className="text-xs text-gray-400 mb-2 font-medium">📺 输出结果</div>
                              <pre className="text-sm whitespace-pre-wrap text-green-300 font-mono leading-relaxed">{output}</pre>
                            </div>
                          )}

                          {/* 图表输出 */}
                          {chartImage[exercise.id] && (
                            <div className="p-5 rounded-xl bg-white border-2 border-gray-100 shadow-md">
                              <div className="text-sm text-gray-500 mb-3 font-medium">📊 Python 生成的图表</div>
                              <div className="flex justify-center">
                                <img
                                  src={chartImage[exercise.id]}
                                  alt="Python生成的图表"
                                  className="max-w-full rounded-xl shadow-md"
                                />
                              </div>
                            </div>
                          )}

                          {/* 参考解答 */}
                          {showExp && exercise.correctCode && (
                            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                              <div className="text-sm text-blue-800 font-medium mb-2 flex items-center gap-1.5">
                                <Sparkles className="h-4 w-4" />
                                参考解答：
                              </div>
                              <pre className="text-sm bg-white p-4 rounded-lg overflow-x-auto text-gray-800 font-mono leading-relaxed border border-gray-100">
                                {exercise.correctCode}
                              </pre>
                              {exercise.explanation && (
                                <div className="text-sm text-gray-700 mt-3 leading-relaxed">
                                  {exercise.explanation}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 章节测验区 - 独立 course-card 结构 */}
          {chapter.quiz && chapter.quiz.length > 0 && (
            <div className="course-card" id={`course${courseNumber}-quiz`} data-course-id={courseNumber}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">章节小测 · 共 {chapter.quiz.length} 题</h2>
              </div>
              <div className="space-y-5">
                {chapter.quiz.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const showExp = showExplanation[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  return (
                    <div
                      key={question.id}
                      className={`p-6 rounded-2xl border transition-all ${
                        showExp && isCorrect
                          ? 'border-green-300 bg-gradient-to-br from-green-50/80 to-emerald-50/50'
                          : 'border-gray-100 bg-white hover:shadow-lg'
                      }`}
                    >
                      <div className="mb-4">
                        <div className="text-xs font-medium text-gray-400 mb-1">小测题 {index + 1}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
                      </div>
                      <div className="space-y-3">
                        {question.options?.map((option, optIndex) => {
                          const isSelected = userAnswer === option;
                          const isCorrectOption = option === question.correctAnswer;
                          let optionClass = 'border-gray-200 hover:border-[#667eea]/50 hover:bg-[#667eea]/5';
                          if (showExp) {
                            if (isCorrectOption) {
                              optionClass = 'border-green-500 bg-green-50 ring-2 ring-green-200';
                            } else if (isSelected && !isCorrectOption) {
                              optionClass = 'border-red-500 bg-red-50 ring-2 ring-red-200';
                            } else {
                              optionClass = 'border-gray-200 opacity-60';
                            }
                          } else if (isSelected) {
                            optionClass = 'border-[#667eea] bg-[#667eea]/5 ring-2 ring-[#667eea]/20';
                          }
                          return (
                            <button
                              key={optIndex}
                              onClick={() => !showExp && handleExerciseAnswer(question.id, option)}
                              disabled={showExp}
                              className={`w-full text-left p-4 rounded-xl border transition-all ${optionClass}`}
                            >
                              <span className="font-bold text-gray-700 mr-2">
                                {String.fromCharCode(65 + optIndex)}.
                              </span>
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {!showExp && userAnswer && (
                        <button
                          onClick={() => checkExerciseAnswer(question.id)}
                          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-300/50 transition-all font-medium"
                        >
                          提交答案
                        </button>
                      )}
                      {showExp && (
                        <div className={`mt-4 p-4 rounded-xl ${
                          isCorrect
                            ? 'bg-gradient-to-br from-green-100 to-emerald-50 text-green-900 border border-green-200'
                            : 'bg-gradient-to-br from-orange-100 to-yellow-50 text-orange-900 border border-orange-200'
                        }`}>
                          <div className={`font-bold mb-2 flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                            {isCorrect ? '✓ 回答正确！' : '✗ 回答错误，让我们看看正确答案'}
                          </div>
                          {question.explanation && (
                            <div className="text-sm leading-relaxed text-gray-700">
                              <div className="font-medium mb-1 text-gray-800">解析：</div>
                              {question.explanation}
                            </div>
                          )}
                          {!question.explanation && question.correctAnswer && (
                            <div className="text-sm">正确答案：{question.correctAnswer}</div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 底部完成区 - 独立 course-card 结构 */}
          <div className="course-card" id={`course${courseNumber}-complete`} data-course-id={courseNumber}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                {!isChapterCompleted ? (
                  <button
                    onClick={handleCompleteChapter}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-lg hover:shadow-purple-300/50 transition-all font-medium"
                  >
                    <CheckCircle className="h-5 w-5" />
                    标记章节完成
                  </button>
                ) : (
                  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 font-medium border border-green-200">
                    <Trophy className="h-5 w-5" />
                    本章已完成 · 恭喜进步！
                  </div>
                )}
              </div>
              {nextChapter ? (
                <Link
                  to={`/learn/${course.id}/${nextChapter.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-300/50 transition-all font-medium"
                >
                  继续下一章
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ) : (
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-300/50 transition-all font-medium"
                >
                  返回课程详情
                  <CheckCircle className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
