/**
 * Lesson ViewModel — presentation logic for lesson reading view.
 */

import { useMemo, useEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { noiCourse } from '@/domain/content';
import { useProgressStore } from '@/presentation/features/courses/store/useProgressStore';

export function useLessonViewModel() {
  const { levelSlug, lessonSlug } = useParams<{ levelSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const { hydrate, isHydrated, startLesson, updateSection, getLessonProgress, completeLesson } = useProgressStore();

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    if (!isHydrated) hydrate();
  }, [isHydrated, hydrate]);

  const level = useMemo(
    () => noiCourse.levels.find((l) => l.slug === levelSlug) ?? null,
    [levelSlug]
  );

  const lesson = useMemo(
    () => level?.lessons.find((l) => l.slug === lessonSlug) ?? null,
    [level, lessonSlug]
  );

  const progress = useMemo(
    () => (lesson ? getLessonProgress(lesson.id) : null),
    [lesson, getLessonProgress]
  );

  // Auto-start lesson on mount
  useEffect(() => {
    if (lesson && level && isHydrated) {
      startLesson(lesson.id, level.id);
      // If the lesson only has 1 section, mark it completed immediately
      if (lesson.sections.length === 1) {
        completeLesson(lesson.id);
      }
    }
  }, [lesson, level, isHydrated, startLesson, completeLesson]);

  // Restore last section or reset on lesson change
  useEffect(() => {
    if (progress && lesson) {
      const savedIndex = progress.lastSectionIndex || 0;
      // Clamp index to prevent out-of-bounds if lesson content changes
      const safeIndex = Math.min(savedIndex, lesson.sections.length - 1);
      setCurrentSectionIndex(Math.max(0, safeIndex));
    } else {
      setCurrentSectionIndex(0);
    }
  }, [lessonSlug, progress?.lastSectionIndex, lesson?.sections.length]);

  const goToSection = useCallback(
    (index: number) => {
      setCurrentSectionIndex(index);
      if (lesson) {
        updateSection(lesson.id, index);
        // Mark lesson as completed if user reaches the last section
        if (index === lesson.sections.length - 1) {
          completeLesson(lesson.id);
        }
      }
    },
    [lesson, updateSection, completeLesson]
  );

  const nextSection = useCallback(() => {
    if (lesson && currentSectionIndex < lesson.sections.length - 1) {
      goToSection(currentSectionIndex + 1);
    }
  }, [lesson, currentSectionIndex, goToSection]);

  const prevSection = useCallback(() => {
    if (currentSectionIndex > 0) {
      goToSection(currentSectionIndex - 1);
    }
  }, [currentSectionIndex, goToSection]);

  // Navigation between lessons
  const lessonIndex = useMemo(
    () => level?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1,
    [level, lessonSlug]
  );

  const prevLesson = useMemo(
    () => (level && lessonIndex > 0 ? level.lessons[lessonIndex - 1] : null),
    [level, lessonIndex]
  );

  const nextLesson = useMemo(
    () => (level && lessonIndex < (level.lessons.length ?? 0) - 1 ? level.lessons[lessonIndex + 1] : null),
    [level, lessonIndex]
  );

  const goToQuiz = useCallback(() => {
    if (level && lesson) {
      navigate(`/courses/${level.slug}/${lesson.slug}/quiz`);
    }
  }, [level, lesson, navigate]);

  return {
    level,
    lesson,
    progress,
    currentSectionIndex,
    currentSection: lesson?.sections[currentSectionIndex] ?? null,
    totalSections: lesson?.sections.length ?? 0,
    isFirstSection: currentSectionIndex === 0,
    isLastSection: lesson ? currentSectionIndex === lesson.sections.length - 1 : true,
    goToSection,
    nextSection,
    prevSection,
    prevLesson,
    nextLesson,
    goToQuiz,
  };
}
