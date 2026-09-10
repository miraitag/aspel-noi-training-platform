/**
 * LocalProgressRepository — Adapter (localStorage).
 *
 * Concrete implementation of ProgressRepository using localStorage.
 * Handles serialization, deserialization, and default state creation.
 */

import type { ProgressRepository } from '@/domain/repositories/progress.repository';
import type { UserProgress, QuizAttempt } from '@/domain/models/progress.model';
import { STORAGE_KEYS } from '@/domain/constants/app.constants';

const PROGRESS_KEY = `${STORAGE_KEYS.AUTH_USER}_course_progress`;

function createDefaultProgress(): UserProgress {
  return {
    lessons: {},
    lastActivityAt: new Date().toISOString(),
    lastLessonId: null,
    lastLevelId: null,
  };
}

export const localProgressRepository: ProgressRepository = {
  getProgress(): UserProgress {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return createDefaultProgress();
      return JSON.parse(raw) as UserProgress;
    } catch {
      return createDefaultProgress();
    }
  },

  saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('[LocalProgressRepository] Failed to save progress:', error);
    }
  },

  startLesson(lessonId: string, levelId: string): void {
    const progress = this.getProgress();
    if (!progress.lessons[lessonId]) {
      progress.lessons[lessonId] = {
        lessonId,
        levelId,
        status: 'in-progress',
        lastSectionIndex: 0,
        bestQuizAttempt: null,
        startedAt: new Date().toISOString(),
        completedAt: null,
      };
    } else {
      progress.lessons[lessonId].status = 'in-progress';
    }
    progress.lastLessonId = lessonId;
    progress.lastLevelId = levelId;
    progress.lastActivityAt = new Date().toISOString();
    this.saveProgress(progress);
  },

  updateLessonSection(lessonId: string, sectionIndex: number): void {
    const progress = this.getProgress();
    const lesson = progress.lessons[lessonId];
    if (lesson && sectionIndex > lesson.lastSectionIndex) {
      lesson.lastSectionIndex = sectionIndex;
      progress.lastActivityAt = new Date().toISOString();
      this.saveProgress(progress);
    }
  },

  completeLesson(lessonId: string): void {
    const progress = this.getProgress();
    const lesson = progress.lessons[lessonId];
    if (lesson) {
      lesson.status = 'completed';
      lesson.completedAt = new Date().toISOString();
      progress.lastActivityAt = new Date().toISOString();
      this.saveProgress(progress);
    }
  },

  saveQuizAttempt(attempt: QuizAttempt): void {
    const progress = this.getProgress();
    const lesson = progress.lessons[attempt.lessonId];
    if (lesson) {
      // Keep only the best attempt
      if (!lesson.bestQuizAttempt || attempt.score > lesson.bestQuizAttempt.score) {
        lesson.bestQuizAttempt = attempt;
      }
      // Auto-complete lesson if quiz is passed
      if (attempt.passed) {
        lesson.status = 'completed';
        lesson.completedAt = new Date().toISOString();
      }
      progress.lastActivityAt = new Date().toISOString();
      this.saveProgress(progress);
    }
  },

  resetProgress(): void {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch (error) {
      console.error('[LocalProgressRepository] Failed to reset progress:', error);
    }
  },

  resetLesson(lessonId: string): void {
    const progress = this.getProgress();
    if (progress.lessons[lessonId]) {
      delete progress.lessons[lessonId];
      if (progress.lastLessonId === lessonId) {
        progress.lastLessonId = null;
      }
      progress.lastActivityAt = new Date().toISOString();
      this.saveProgress(progress);
    }
  },

  resetLevel(levelId: string): void {
    const progress = this.getProgress();
    let changed = false;
    
    for (const [lessonId, lessonData] of Object.entries(progress.lessons)) {
      if (lessonData.levelId === levelId) {
        delete progress.lessons[lessonId];
        changed = true;
      }
    }
    
    if (progress.lastLevelId === levelId) {
      progress.lastLevelId = null;
      progress.lastLessonId = null;
      changed = true;
    }
    
    if (changed) {
      progress.lastActivityAt = new Date().toISOString();
      this.saveProgress(progress);
    }
  },
};
