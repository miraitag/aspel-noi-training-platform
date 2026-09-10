/**
 * Course ViewModel — presentation logic for the courses overview.
 */

import { useMemo, useEffect } from 'react';
import { noiCourse } from '@/domain/content';
import { useProgressStore } from '@/presentation/features/courses/store/useProgressStore';

export function useCourseViewModel() {
  const { hydrate, isHydrated, getCourseSummary, getLevelProgress, progress } = useProgressStore();

  useEffect(() => {
    if (!isHydrated) hydrate();
  }, [isHydrated, hydrate]);

  const course = noiCourse;

  // `progress` is the reactive state — without it as a dep, these memos never recompute
  // because getCourseSummary/getLevelProgress are stable function references in Zustand
  const summary = useMemo(() => getCourseSummary(), [getCourseSummary, progress]);

  const levelsWithProgress = useMemo(
    () =>
      course.levels.map((level) => ({
        ...level,
        progress: getLevelProgress(level.id),
      })),
    [course.levels, getLevelProgress, progress]
  );

  return {
    course,
    summary,
    levelsWithProgress,
    isHydrated,
  };
}
