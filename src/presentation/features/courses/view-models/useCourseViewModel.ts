/**
 * Course ViewModel — presentation logic for the courses overview.
 */

import { useMemo, useEffect } from 'react';
import { noiCourse } from '@/domain/content';
import { useProgressStore } from '@/presentation/features/courses/store/useProgressStore';

export function useCourseViewModel() {
  const { hydrate, isHydrated, getCourseSummary, getLevelProgress } = useProgressStore();

  useEffect(() => {
    if (!isHydrated) hydrate();
  }, [isHydrated, hydrate]);

  const course = noiCourse;
  const summary = useMemo(() => getCourseSummary(), [getCourseSummary]);

  const levelsWithProgress = useMemo(
    () =>
      course.levels.map((level) => ({
        ...level,
        progress: getLevelProgress(level.id),
      })),
    [course.levels, getLevelProgress]
  );

  return {
    course,
    summary,
    levelsWithProgress,
    isHydrated,
  };
}
