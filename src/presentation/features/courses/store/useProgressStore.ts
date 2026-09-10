/**
 * Progress Store — Zustand.
 *
 * Manages student progress state with localStorage persistence.
 * Provides computed values for level/course completion.
 */

import { create } from 'zustand';

import type { UserProgress, LessonProgress, QuizAttempt, CourseProgressSummary, LevelProgress } from '@/domain/models/progress.model';
import { localProgressRepository } from '@/infrastructure/repositories/LocalProgressRepository';
import { noiCourse } from '@/domain/content';

interface ProgressState {
  progress: UserProgress;
  isHydrated: boolean;
}

interface ProgressActions {
  hydrate: () => void;
  startLesson: (lessonId: string, levelId: string) => void;
  updateSection: (lessonId: string, sectionIndex: number) => void;
  completeLesson: (lessonId: string) => void;
  saveQuizAttempt: (attempt: QuizAttempt) => void;
  resetProgress: () => void;
  resetLesson: (lessonId: string) => void;
  resetLevel: (levelId: string) => void;
  getLessonProgress: (lessonId: string) => LessonProgress | null;
  getCourseSummary: () => CourseProgressSummary;
  getLevelProgress: (levelId: string) => LevelProgress;
}

export const useProgressStore = create<ProgressState & ProgressActions>((set, get) => ({
  progress: {
    lessons: {},
    lastActivityAt: new Date().toISOString(),
    lastLessonId: null,
    lastLevelId: null,
  },
  isHydrated: false,

  hydrate: () => {
    const progress = localProgressRepository.getProgress();
    set({ progress, isHydrated: true });
  },

  startLesson: (lessonId, levelId) => {
    localProgressRepository.startLesson(lessonId, levelId);
    set({ progress: localProgressRepository.getProgress() });
  },

  updateSection: (lessonId, sectionIndex) => {
    localProgressRepository.updateLessonSection(lessonId, sectionIndex);
    set({ progress: localProgressRepository.getProgress() });
  },

  completeLesson: (lessonId) => {
    localProgressRepository.completeLesson(lessonId);
    set({ progress: localProgressRepository.getProgress() });
  },

  saveQuizAttempt: (attempt) => {
    localProgressRepository.saveQuizAttempt(attempt);
    set({ progress: localProgressRepository.getProgress() });
  },

  resetProgress: () => {
    localProgressRepository.resetProgress();
    set({
      progress: {
        lessons: {},
        lastActivityAt: new Date().toISOString(),
        lastLessonId: null,
        lastLevelId: null,
      },
    });
  },

  resetLesson: (lessonId) => {
    localProgressRepository.resetLesson(lessonId);
    set({ progress: localProgressRepository.getProgress() });
  },

  resetLevel: (levelId) => {
    localProgressRepository.resetLevel(levelId);
    set({ progress: localProgressRepository.getProgress() });
  },

  getLessonProgress: (lessonId) => {
    return get().progress.lessons[lessonId] ?? null;
  },

  getCourseSummary: (): CourseProgressSummary => {
    const { progress } = get();
    const levelProgressList: LevelProgress[] = noiCourse.levels.map((level) => {
      const completed = level.lessons.filter(
        (l) => progress.lessons[l.id]?.status === 'completed'
      ).length;
      return {
        levelId: level.id,
        completionPercentage: level.lessons.length > 0 ? Math.round((completed / level.lessons.length) * 100) : 0,
        lessonsCompleted: completed,
        totalLessons: level.lessons.length,
        isCompleted: completed === level.lessons.length,
      };
    });

    const totalCompleted = levelProgressList.reduce((sum, lp) => sum + lp.lessonsCompleted, 0);
    const totalQuizzesPassed = Object.values(progress.lessons).filter(
      (lp) => lp.bestQuizAttempt?.passed
    ).length;

    // Current level = first non-completed level
    const currentLevel = levelProgressList.findIndex((lp) => !lp.isCompleted) + 1 || noiCourse.levels.length;

    return {
      totalLessonsCompleted: totalCompleted,
      totalLessons: noiCourse.totalLessons,
      overallPercentage: Math.round((totalCompleted / noiCourse.totalLessons) * 100),
      totalQuizzesPassed,
      totalQuizzes: noiCourse.totalLessons,
      currentLevel,
      levelProgress: levelProgressList,
    };
  },

  getLevelProgress: (levelId): LevelProgress => {
    const { progress } = get();
    const level = noiCourse.levels.find((l) => l.id === levelId);
    if (!level) {
      return { levelId, completionPercentage: 0, lessonsCompleted: 0, totalLessons: 0, isCompleted: false };
    }
    const completed = level.lessons.filter(
      (l) => progress.lessons[l.id]?.status === 'completed'
    ).length;
    return {
      levelId,
      completionPercentage: level.lessons.length > 0 ? Math.round((completed / level.lessons.length) * 100) : 0,
      lessonsCompleted: completed,
      totalLessons: level.lessons.length,
      isCompleted: completed === level.lessons.length,
    };
  },
}));
