/**
 * Progress Domain Models.
 *
 * Type definitions for tracking student progress through the course.
 * Progress is persisted to localStorage and synced with the Zustand store.
 */

import type { LessonStatus } from './course.model';

// ─── Quiz Progress ───────────────────────────────────────

export interface QuizAttempt {
  quizId: string;
  lessonId: string;
  /** Answers selected by the student (index per question) */
  answers: number[];
  /** Score as percentage (0–100) */
  score: number;
  /** Whether the student passed (score >= passingScore) */
  passed: boolean;
  /** ISO timestamp of the attempt */
  attemptedAt: string;
}

// ─── Lesson Progress ─────────────────────────────────────

export interface LessonProgress {
  lessonId: string;
  levelId: string;
  status: LessonStatus;
  /** Last section index the student viewed (0-based) */
  lastSectionIndex: number;
  /** Best quiz attempt for this lesson */
  bestQuizAttempt: QuizAttempt | null;
  /** ISO timestamp of first access */
  startedAt: string | null;
  /** ISO timestamp of completion */
  completedAt: string | null;
}

// ─── Level Progress ──────────────────────────────────────

export interface LevelProgress {
  levelId: string;
  /** Percentage of lessons completed (0–100) */
  completionPercentage: number;
  /** Number of lessons completed in this level */
  lessonsCompleted: number;
  /** Total lessons in this level */
  totalLessons: number;
  /** Whether all lessons are completed */
  isCompleted: boolean;
}

// ─── Global User Progress ────────────────────────────────

export interface UserProgress {
  /** Map of lessonId → LessonProgress */
  lessons: Record<string, LessonProgress>;
  /** ISO timestamp of last activity */
  lastActivityAt: string;
  /** The last lesson the student was viewing */
  lastLessonId: string | null;
  /** The last level the student was viewing */
  lastLevelId: string | null;
}

// ─── Computed Progress (derived, not stored) ─────────────

export interface CourseProgressSummary {
  totalLessonsCompleted: number;
  totalLessons: number;
  overallPercentage: number;
  totalQuizzesPassed: number;
  totalQuizzes: number;
  currentLevel: number;
  levelProgress: LevelProgress[];
}
