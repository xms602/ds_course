
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Award } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Quiz() {
  const { courseId } = useParams<{ courseId: string }>();
  const { courses, userProgress, saveQuizScore } = useStore();
  
  const course = courses.find(c => c.id === courseId);
  const courseProgress = userProgress.find(p => p.courseId === courseId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">课程未找到</h2>
          <Link to="/courses" className="text-blue-600 hover:text-blue-700">
            返回课程列表
          </Link>
        </div>
      </div>
    );
  }

  const allQuestions = course.chapters.flatMap(ch => ch.quiz);
  
  if (allQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          返回课程详情
        </Link>
        <div className="text-center bg-white rounded-xl shadow-md p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">暂无测评题目</h2>
          <p className="text-gray-600">请先完成课程学习</p>
        </div>
      </div>
    );
  }

  const currentQuestion = allQuestions[currentQuestionIndex];
  const totalPoints = allQuestions.reduce((sum, q) => sum + q.points, 0);

  const calculateScore = () => {
    let earnedPoints = 0;
    allQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        earnedPoints += q.points;
      }
    });
    return Math.round((earnedPoints / totalPoints) * 100);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    const score = calculateScore();
    saveQuizScore(course.id, score);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const score = calculateScore();
  const isPassed = score >= 60;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to={`/courses/${course.id}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        返回课程详情
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">{course.title} - 综合测评</h1>
          <p className="text-blue-100">共 {allQuestions.length} 道题，满分 100 分</p>
        </div>

        {!isSubmitted ? (
          <div className="p-8">
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">答题进度</span>
                <span className="font-medium text-gray-900">
                  {currentQuestionIndex + 1} / {allQuestions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / allQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start gap-3 mb-6">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
                  {currentQuestionIndex + 1}
                </span>
                <h2 className="text-xl font-semibold text-gray-900">{currentQuestion.question}</h2>
              </div>

              {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(currentQuestion.id, option)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        answers[currentQuestion.id] === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'true-false' && (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleAnswer(currentQuestion.id, 'true')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      answers[currentQuestion.id] === 'true'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                    }`}
                  >
                    正确
                  </button>
                  <button
                    onClick={() => handleAnswer(currentQuestion.id, 'false')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      answers[currentQuestion.id] === 'false'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                    }`}
                  >
                    错误
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                上一题
              </button>
              {currentQuestionIndex === allQuestions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length < allQuestions.length}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className={`text-center p-8 rounded-xl mb-8 ${isPassed ? 'bg-green-50' : 'bg-yellow-50'}`}>
              {isPassed ? (
                <Award className="h-16 w-16 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              )}
              <h2 className="text-3xl font-bold mb-2">
                {isPassed ? '恭喜通过！' : '继续加油'}
              </h2>
              <div className="text-5xl font-bold mb-2">
                {score}
                <span className="text-2xl text-gray-500">分</span>
              </div>
              <p className="text-lg text-gray-600">
                {isPassed ? '您已掌握本课程的核心内容' : '建议重新学习后再试一次'}
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6">答题详情</h3>
            <div className="space-y-6">
              {allQuestions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <div key={question.id} className={`p-6 rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {index + 1}. {question.question}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          您的答案: {userAnswer} · 正确答案: {question.correctAnswer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                to={`/courses/${course.id}`}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                返回课程
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setAnswers({});
                  setCurrentQuestionIndex(0);
                }}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                重新测评
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
