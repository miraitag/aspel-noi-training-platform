/**
 * Progress Repository — Port (interface).
 *
 * Defines the contract for persisting and retrieving student progress.
 * The infrastructure layer provides the concrete implementation (localStorage).
 */

import type { UserProgress, QuizAttempt } from '@/domain/models/progress.model';

export interface ProgressRepository {
  /** Get the full user progress object */
  getProgress(): UserProgress;

  /** Save the full user progress object */
  saveProgress(progress: UserProgress): void;

  /** Mark a lesson as started */
  startLesson(lessonId: string, levelId: string): void;

  /** Update the last section viewed in a lesson */
  updateLessonSection(lessonId: string, sectionIndex: number): void;

  /** Mark a lesson as completed */
  completeLesson(lessonId: string): void;

  /** Save a quiz attempt */
  saveQuizAttempt(attempt: QuizAttempt): void;

  /** Reset all progress */
  resetProgress(): void;
}
