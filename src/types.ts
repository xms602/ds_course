
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  chapters: Chapter[];
  thumbnail: string;
  estimatedHours: number;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  exercises: Exercise[];
  quiz: QuizQuestion[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'coding' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserProgress {
  courseId: string;
  completedChapters: string[];
  completedExercises: string[];
  quizScores: { [quizId: string]: number };
  achievements: string[];
}
