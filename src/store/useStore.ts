
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, UserProgress, Achievement } from '@/types';
import { coursesData } from '@/data/coursesData';
import { achievementsData } from '@/data/achievementsData';

interface StoreState {
  courses: Course[];
  achievements: Achievement[];
  userProgress: UserProgress[];
  currentCourseId: string | null;
  currentChapterId: string | null;
  
  setCurrentCourse: (courseId: string) => void;
  setCurrentChapter: (chapterId: string) => void;
  
  completeChapter: (courseId: string, chapterId: string) => void;
  completeExercise: (courseId: string, exerciseId: string) => void;
  saveQuizScore: (courseId: string, score: number) => void;
  unlockAchievement: (achievementId: string) => void;
  
  getCourseProgress: (courseId: string) => number;
  getTotalProgress: () => number;
  getUnlockedAchievements: () => Achievement[];
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      courses: coursesData,
      achievements: achievementsData,
      userProgress: [],
      currentCourseId: null,
      currentChapterId: null,
      
      setCurrentCourse: (courseId: string) => set({ currentCourseId: courseId }),
      setCurrentChapter: (chapterId: string) => set({ currentChapterId: chapterId }),
      
      completeChapter: (courseId: string, chapterId: string) => {
        set((state) => {
          const existingProgress = state.userProgress.find(p => p.courseId === courseId);
          let newProgress: UserProgress[];
          
          if (existingProgress) {
            if (!existingProgress.completedChapters.includes(chapterId)) {
              newProgress = state.userProgress.map(p => 
                p.courseId === courseId 
                  ? { ...p, completedChapters: [...p.completedChapters, chapterId] }
                  : p
              );
            } else {
              newProgress = state.userProgress;
            }
          } else {
            newProgress = [...state.userProgress, {
              courseId,
              completedChapters: [chapterId],
              completedExercises: [],
              quizScores: {},
              achievements: []
            }];
          }
          
          return { userProgress: newProgress };
        });
        
        const state = get();
        const courseProgress = state.getCourseProgress(courseId);
        if (courseProgress === 100) {
          state.unlockAchievement('first-course');
        }
      },
      
      completeExercise: (courseId: string, exerciseId: string) => {
        set((state) => {
          const existingProgress = state.userProgress.find(p => p.courseId === courseId);
          let newProgress: UserProgress[];
          
          if (existingProgress) {
            if (!existingProgress.completedExercises.includes(exerciseId)) {
              newProgress = state.userProgress.map(p => 
                p.courseId === courseId 
                  ? { ...p, completedExercises: [...p.completedExercises, exerciseId] }
                  : p
              );
            } else {
              newProgress = state.userProgress;
            }
          } else {
            newProgress = [...state.userProgress, {
              courseId,
              completedChapters: [],
              completedExercises: [exerciseId],
              quizScores: {},
              achievements: []
            }];
          }
          
          return { userProgress: newProgress };
        });
      },
      
      saveQuizScore: (courseId: string, score: number) => {
        set((state) => {
          const existingProgress = state.userProgress.find(p => p.courseId === courseId);
          let newProgress: UserProgress[];
          
          if (existingProgress) {
            newProgress = state.userProgress.map(p => 
              p.courseId === courseId 
                ? { ...p, quizScores: { ...p.quizScores, [courseId]: score } }
                : p
            );
          } else {
            newProgress = [...state.userProgress, {
              courseId,
              completedChapters: [],
              completedExercises: [],
              quizScores: { [courseId]: score },
              achievements: []
            }];
          }
          
          return { userProgress: newProgress };
        });
        
        const state = get();
        state.unlockAchievement('first-quiz');
        if (score === 100) {
          state.unlockAchievement('perfect-score');
        }
      },
      
      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const achievement = state.achievements.find(a => a.id === achievementId);
          if (achievement && !achievement.unlocked) {
            const newAchievements = state.achievements.map(a => 
              a.id === achievementId 
                ? { ...a, unlocked: true, unlockedAt: new Date().toISOString() }
                : a
            );
            
            const isFirstAchievement = !state.achievements.some(a => a.unlocked);
            if (isFirstAchievement && achievementId !== 'first-achievement') {
              setTimeout(() => {
                const currentState = get();
                if (!currentState.achievements.find(a => a.id === 'first-achievement')?.unlocked) {
                  currentState.unlockAchievement('first-achievement');
                }
              }, 100);
            }
            
            const unlockedCount = newAchievements.filter(a => a.unlocked).length;
            if (unlockedCount >= 5) {
              setTimeout(() => {
                const currentState = get();
                if (!currentState.achievements.find(a => a.id === 'five-achievements')?.unlocked) {
                  currentState.unlockAchievement('five-achievements');
                }
              }, 200);
            }
            
            return { achievements: newAchievements };
          }
          return state;
        });
      },
      
      getCourseProgress: (courseId: string) => {
        const state = get();
        const course = state.courses.find(c => c.id === courseId);
        const progress = state.userProgress.find(p => p.courseId === courseId);
        
        if (!course || !progress) return 0;
        
        const totalChapters = course.chapters.length;
        const completedChapters = progress.completedChapters.length;
        
        return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
      },
      
      getTotalProgress: () => {
        const state = get();
        let totalChapters = 0;
        let completedChapters = 0;
        
        state.courses.forEach(course => {
          totalChapters += course.chapters.length;
          const progress = state.userProgress.find(p => p.courseId === course.id);
          if (progress) {
            completedChapters += progress.completedChapters.length;
          }
        });
        
        return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
      },
      
      getUnlockedAchievements: () => {
        const state = get();
        return state.achievements.filter(a => a.unlocked);
      }
    }),
    {
      name: 'business-analytics-storage'
    }
  )
);
