import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LearningState, PracticeRecord, WrongQuestion, PracticeQuestion } from '@/types';
import { questionsData } from '@/data/questions';
import { coursesData } from '@/data/coursesData';
import { achievementsData } from '@/data/achievementsData';

interface StoreState {
  learningState: LearningState;
  courses: typeof coursesData;
  achievements: typeof achievementsData;

  setTheme: (theme: 'light' | 'dark') => void;
  completeChapter: (chapterId: string) => void;
  setCurrentChapter: (chapterId: string | null) => void;

  recordPractice: (questionId: string, userAnswer: string | string[], isCorrect: boolean) => void;
  addWrongQuestion: (questionId: string, userAnswer: string | string[], correctAnswer: string | string[]) => void;
  removeWrongQuestion: (questionId: string) => void;

  completeExercise: (courseId: string, chapterId: string, exerciseId: string) => void;
  saveQuizScore: (courseId: string, chapterId: string, quizId: string, score: number) => void;
  unlockAchievement: (achievementId: string) => void;
  markProjectComplete: (projectId: string) => void;

  getChapterProgress: (chapterId: string) => boolean;
  getTotalCompletedChapters: () => number;
  getTotalChapters: () => number;
  getOverallAccuracy: () => number;
  getPracticeCount: () => number;
  getWrongQuestionCount: () => number;
  getChapterAccuracy: (chapterId: string) => number;
  getKnowledgePointAccuracy: (knowledgePoint: string) => { correct: number; total: number };
  getWrongQuestionsDetail: () => PracticeQuestion[];
  getRecentPractice: (limit?: number) => PracticeRecord[];
  getPracticeHistoryByChapter: (chapterId: string) => PracticeRecord[];
  getCourseProgress: (courseId: string) => { completedChapters: string[]; quizScores: Record<string, number> };
  getUnlockedAchievements: () => typeof achievementsData;
  getProjectProgress: (projectId: string) => boolean;
  getTotalProgress: () => number;
  userProgress: () => LearningState;
}

const initialState: LearningState = {
  completedChapters: [],
  currentChapterId: null,
  chapterTimestamps: {},
  practiceRecords: [],
  wrongQuestions: [],
  unlockedAchievements: [],
  courseProgress: {},
  projectProgress: {},
  theme: 'light',
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      learningState: initialState,
      courses: coursesData,
      achievements: achievementsData,

      setTheme: (theme: 'light' | 'dark') => {
        set((state) => ({
          learningState: { ...state.learningState, theme },
        }));
      },

      completeChapter: (chapterId: string) => {
        set((state) => {
          const completed = [...state.learningState.completedChapters];
          if (!completed.includes(chapterId)) {
            completed.push(chapterId);
          }
          return {
            learningState: {
              ...state.learningState,
              completedChapters: completed,
              chapterTimestamps: {
                ...state.learningState.chapterTimestamps,
                [chapterId]: Date.now(),
              },
            },
          };
        });
      },

      setCurrentChapter: (chapterId: string | null) => {
        set((state) => ({
          learningState: { ...state.learningState, currentChapterId: chapterId },
        }));
      },

      recordPractice: (questionId: string, userAnswer: string | string[], isCorrect: boolean) => {
        set((state) => {
          const record: PracticeRecord = {
            questionId,
            userAnswer,
            isCorrect,
            timestamp: Date.now(),
          };
          return {
            learningState: {
              ...state.learningState,
              practiceRecords: [...state.learningState.practiceRecords, record],
            },
          };
        });
      },

      addWrongQuestion: (questionId: string, userAnswer: string | string[], correctAnswer: string | string[]) => {
        set((state) => {
          const existing = state.learningState.wrongQuestions.find(
            (wq) => wq.questionId === questionId
          );
          let updated: WrongQuestion[];
          if (existing) {
            updated = state.learningState.wrongQuestions.map((wq) =>
              wq.questionId === questionId
                ? { ...wq, wrongCount: wq.wrongCount + 1, lastWrongTime: Date.now() }
                : wq
            );
          } else {
            updated = [
              ...state.learningState.wrongQuestions,
              {
                questionId,
                userAnswer,
                correctAnswer,
                wrongCount: 1,
                lastWrongTime: Date.now(),
              },
            ];
          }
          return {
            learningState: { ...state.learningState, wrongQuestions: updated },
          };
        });
      },

      removeWrongQuestion: (questionId: string) => {
        set((state) => ({
          learningState: {
            ...state.learningState,
            wrongQuestions: state.learningState.wrongQuestions.filter(
              (wq) => wq.questionId !== questionId
            ),
          },
        }));
      },

      getChapterProgress: (chapterId: string) => {
        return get().learningState.completedChapters.includes(chapterId);
      },

      getTotalCompletedChapters: () => {
        return get().learningState.completedChapters.length;
      },

      getTotalChapters: () => {
        return 16;
      },

      getOverallAccuracy: () => {
        const { practiceRecords } = get().learningState;
        if (practiceRecords.length === 0) return 0;
        const correct = practiceRecords.filter((r) => r.isCorrect).length;
        return Math.round((correct / practiceRecords.length) * 100);
      },

      getPracticeCount: () => {
        return get().learningState.practiceRecords.length;
      },

      getWrongQuestionCount: () => {
        return get().learningState.wrongQuestions.length;
      },

      getChapterAccuracy: (chapterId: string) => {
        const { practiceRecords } = get().learningState;
        const questionIds = questionsData
          .filter((q) => q.chapterId === chapterId)
          .map((q) => q.id);
        const related = practiceRecords.filter((r) => questionIds.includes(r.questionId));
        if (related.length === 0) return 0;
        const correct = related.filter((r) => r.isCorrect).length;
        return Math.round((correct / related.length) * 100);
      },

      getKnowledgePointAccuracy: (knowledgePoint: string) => {
        const { practiceRecords } = get().learningState;
        const questionIds = questionsData
          .filter((q) => q.knowledgePoint === knowledgePoint)
          .map((q) => q.id);
        const related = practiceRecords.filter((r) => questionIds.includes(r.questionId));
        const correct = related.filter((r) => r.isCorrect).length;
        return { correct, total: related.length };
      },

      getWrongQuestionsDetail: () => {
        const { wrongQuestions } = get().learningState;
        return wrongQuestions
          .map((wq) => questionsData.find((q) => q.id === wq.questionId))
          .filter((q): q is PracticeQuestion => q !== undefined);
      },

      getRecentPractice: (limit = 20) => {
        const { practiceRecords } = get().learningState;
        return [...practiceRecords]
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, limit);
      },

      getPracticeHistoryByChapter: (chapterId: string) => {
        const { practiceRecords } = get().learningState;
        const questionIds = questionsData
          .filter((q) => q.chapterId === chapterId)
          .map((q) => q.id);
        return practiceRecords.filter((r) => questionIds.includes(r.questionId));
      },

      completeExercise: (courseId: string, chapterId: string, exerciseId: string) => {
        set((state) => {
          const courseProgress = state.learningState.courseProgress[courseId] || { completedChapters: [], quizScores: {} };
          const completedChapters = courseProgress.completedChapters.includes(chapterId) 
            ? courseProgress.completedChapters 
            : [...courseProgress.completedChapters, chapterId];
          return {
            learningState: {
              ...state.learningState,
              courseProgress: {
                ...state.learningState.courseProgress,
                [courseId]: { ...courseProgress, completedChapters },
              },
            },
          };
        });
      },

      saveQuizScore: (courseId: string, chapterId: string, quizId: string, score: number) => {
        set((state) => {
          const courseProgress = state.learningState.courseProgress[courseId] || { completedChapters: [], quizScores: {} };
          return {
            learningState: {
              ...state.learningState,
              courseProgress: {
                ...state.learningState.courseProgress,
                [courseId]: {
                  ...courseProgress,
                  quizScores: { ...courseProgress.quizScores, [quizId]: score },
                },
              },
            },
          };
        });
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => {
          if (!state.learningState.unlockedAchievements.includes(achievementId)) {
            return {
              learningState: {
                ...state.learningState,
                unlockedAchievements: [...state.learningState.unlockedAchievements, achievementId],
              },
            };
          }
          return state;
        });
      },

      markProjectComplete: (projectId: string) => {
        set((state) => ({
          learningState: {
            ...state.learningState,
            projectProgress: { ...state.learningState.projectProgress, [projectId]: true },
          },
        }));
      },

      getCourseProgress: (courseId: string) => {
        return get().learningState.courseProgress[courseId] || { completedChapters: [], quizScores: {} };
      },

      getUnlockedAchievements: () => {
        const { unlockedAchievements } = get().learningState;
        return achievementsData.filter((a) => unlockedAchievements.includes(a.id));
      },

      getProjectProgress: (projectId: string) => {
        return get().learningState.projectProgress[projectId] || false;
      },

      getTotalProgress: () => {
        const totalChapters = 16;
        const completed = get().learningState.completedChapters.length;
        return Math.round((completed / totalChapters) * 100);
      },

      userProgress: () => {
        return get().learningState;
      },
    }),
    {
      name: 'python-learning-storage',
    }
  )
);
