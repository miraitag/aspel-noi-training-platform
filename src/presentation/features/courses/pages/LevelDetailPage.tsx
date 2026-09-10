/**
 * LevelDetailPage — Lista de lecciones de un nivel.
 */

import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle, Clock, PlayCircle } from 'lucide-react';

import { Card, CardContent } from '@/presentation/shared/atoms/ui/card';
import { Badge } from '@/presentation/shared/atoms/ui/badge';
import { Progress } from '@/presentation/shared/atoms/ui/progress';
import { buttonVariants } from '@/presentation/shared/atoms/ui/button';
import { noiCourse } from '@/domain/content';
import { useProgressStore } from '../store/useProgressStore';
import { useEffect } from 'react';

export function LevelDetailPage() {
  const { levelSlug } = useParams<{ levelSlug: string }>();
  const { hydrate, isHydrated, getLessonProgress, getLevelProgress } = useProgressStore();

  useEffect(() => {
    if (!isHydrated) hydrate();
  }, [isHydrated, hydrate]);

  const level = useMemo(
    () => noiCourse.levels.find((l) => l.slug === levelSlug) ?? null,
    [levelSlug]
  );

  const levelProgress = useMemo(
    () => (level ? getLevelProgress(level.id) : null),
    [level, getLevelProgress]
  );

  if (!level) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-lg text-muted-foreground">Nivel no encontrado</p>
        <Link to="/courses" className={buttonVariants({ variant: "outline" })}>
          Volver a cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link to="/courses" className={buttonVariants({ variant: "ghost", size: "sm", className: "-ml-2" })}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Todos los niveles
      </Link>

      {/* Level Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{level.icon}</span>
          <div>
            <p className="text-sm font-medium text-primary">Nivel {level.number} · {level.subtitle}</p>
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{level.title}</h1>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mt-2">{level.description}</p>

        {levelProgress && (
          <div className="flex items-center gap-3 mt-4">
            <Progress value={levelProgress.completionPercentage} className="h-2 max-w-xs" />
            <span className="text-sm font-medium">
              {levelProgress.lessonsCompleted}/{levelProgress.totalLessons} completadas
            </span>
          </div>
        )}

        {level.practicalCase && (
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-primary mb-1">🎯 Caso práctico del nivel</p>
            <p className="text-sm text-foreground/80">{level.practicalCase}</p>
          </div>
        )}
      </div>

      {/* Lessons List */}
      <div className="space-y-3">
        {level.lessons.map((lesson, i) => {
          const lp = getLessonProgress(lesson.id);
          const isCompleted = lp?.status === 'completed';
          const isInProgress = lp?.status === 'in-progress';

          return (
            <Link
              key={lesson.id}
              to={`/courses/${level.slug}/${lesson.slug}`}
              className={`animate-fade-in-up stagger-${i + 1}`}
            >
              <Card className={`group transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${isCompleted ? 'border-success/30 bg-success/5' : isInProgress ? 'border-primary/30 bg-primary/5' : ''}`}>
                <CardContent className="flex items-center gap-4 py-4">
                  {/* Status Icon */}
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    ) : isInProgress ? (
                      <PlayCircle className="h-6 w-6 text-primary animate-pulse-glow rounded-full" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground/40" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">Lección {lesson.number}</span>
                      {isCompleted && lp?.bestQuizAttempt && (
                        <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/30">
                          Quiz: {lp.bestQuizAttempt.score}%
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{lesson.description}</p>
                  </div>

                  {/* Duration */}
                  <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                    {lesson.durationMinutes} min
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
