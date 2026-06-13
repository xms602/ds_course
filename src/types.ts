export interface Chapter {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  codeExamples: CodeExample[];
  exercises: ChapterExercise[];
}

export interface CodeExample {
  id: string;
  code: string;
  explanation?: string;
  canRun?: boolean;
}

export interface ChapterExercise {
  id: string;
  type: 'single-choice' | 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface PracticeQuestion {
  id: string;
  chapterId: string;
  chapterTitle: string;
  knowledgePoint: string;
  type: 'single-choice' | 'multiple-choice' | 'coding';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  codeTemplate?: string;
  expectedOutput?: string;
}

export interface PracticeRecord {
  questionId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  timestamp: number;
}

export interface WrongQuestion {
  questionId: string;
  userAnswer: string | string[];
  correctAnswer: string | string[];
  wrongCount: number;
  lastWrongTime: number;
}

export interface CourseChapter {
  id: string;
  title: string;
  content: string;
  exercises: CourseExercise[];
  quiz: CourseQuiz[];
}

export interface CourseExercise {
  id: string;
  type: 'multiple-choice' | 'coding';
  question: string;
  options?: string[];
  codeTemplate?: string;
  correctCode?: string;
  correctAnswer?: string | string[];
  explanation?: string;
  points?: number;
}

export interface CourseQuiz {
  id: string;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  thumbnail: string;
  chapters: CourseChapter[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
}

export interface LearningState {
  completedChapters: string[];
  currentChapterId: string | null;
  chapterTimestamps: Record<string, number>;
  practiceRecords: PracticeRecord[];
  wrongQuestions: WrongQuestion[];
  unlockedAchievements: string[];
  courseProgress: Record<string, { completedChapters: string[]; quizScores: Record<string, number> }>;
  projectProgress: Record<string, boolean>;
  theme: 'light' | 'dark';
}
