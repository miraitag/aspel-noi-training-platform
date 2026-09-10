/**
 * Course Domain Models.
 *
 * Type definitions for the entire course structure:
 * Course → Level → Lesson → Sections + Quiz
 *
 * These types define the shape of static content and are used
 * throughout the presentation layer for rendering and navigation.
 */

// ─── Enums ───────────────────────────────────────────────

export type LevelDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type LessonSectionType =
  | 'concept'
  | 'explanation'
  | 'numeric-example'
  | 'noi-procedure'
  | 'guided-exercise'
  | 'practice-exercise'
  | 'common-errors';

export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed';

// ─── Section Content ─────────────────────────────────────

export interface LessonSection {
  id: string;
  type: LessonSectionType;
  title: string;
  content: string;
  /** Optional code/formula blocks rendered with special formatting */
  codeBlocks?: CodeBlock[];
  /** Optional callout boxes (tips, warnings, important notes) */
  callouts?: Callout[];
  /** Optional step-by-step list for procedures */
  steps?: string[];
  /** Optional solution text (markdown supported) for practice exercises */
  solution?: string;
}

export interface CodeBlock {
  language: 'formula' | 'text' | 'json';
  label?: string;
  code: string;
}

export interface Callout {
  type: 'tip' | 'warning' | 'important' | 'note';
  content: string;
}

// ─── Quiz ────────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Index of the correct option (0-based) */
  correctAnswer: number;
  /** Explanation shown after answering */
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  /** Minimum score (0-100) required to pass */
  passingScore: number;
  questions: QuizQuestion[];
}

// ─── Lesson ──────────────────────────────────────────────

export interface Lesson {
  id: string;
  slug: string;
  number: number;
  title: string;
  description: string;
  /** Estimated duration in minutes */
  durationMinutes: number;
  sections: LessonSection[];
  quiz: Quiz;
  /** Learning objectives shown at the top of the lesson */
  objectives: string[];
}

// ─── Level ───────────────────────────────────────────────

export interface Level {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  difficulty: LevelDifficulty;
  /** Color identifier for the level badge */
  color: LevelColor;
  /** Emoji icon for the level */
  icon: string;
  lessons: Lesson[];
  /** Practical case description for the level */
  practicalCase?: string;
}

export type LevelColor = 'green' | 'yellow' | 'orange' | 'red' | 'fire';

// ─── Course ──────────────────────────────────────────────

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Total estimated duration in hours */
  totalHours: string;
  totalLessons: number;
  totalLevels: number;
  levels: Level[];
}
