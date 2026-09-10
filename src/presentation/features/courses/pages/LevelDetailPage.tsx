/**
 * LevelDetailPage — Lista de lecciones de un nivel.
 */

import { useMemo, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle, Clock, PlayCircle, RotateCcw } from 'lucide-react';

import { Card, CardContent } from '@/presentation/shared/atoms/ui/card';
import { Badge } from '@/presentation/shared/atoms/ui/badge';
import { Progress } from '@/presentation/shared/atoms/ui/progress';
import { Button, buttonVariants } from '@/presentation/shared/atoms/ui/button';
import { ConfirmDialog } from '@/presentation/shared/atoms/ui/confirm-dialog';
import { noiCourse } from '@/domain/content';
import { useProgressStore } from '../store/useProgressStore';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function LevelDetailPage() {
  const { levelSlug } = useParams<{ levelSlug: string }>();
  const { hydrate, isHydrated, getLessonProgress, getLevelProgress, resetLesson, resetLevel, progress } = useProgressStore();

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

  // Check if ANY lesson in this level has been started (not just completed)
  const hasAnyProgress = useMemo(() => {
    if (!level) return false;
    return level.lessons.some((l) => !!progress.lessons[l.id]);
  }, [level, progress.lessons]);

  // Dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
    confirmLabel: string;
    onConfirm: () => void;
  }>({ open: false, title: '', description: '', confirmLabel: '', onConfirm: () => {} });

  const openConfirm = useCallback((opts: Omit<typeof confirmDialog, 'open'>) => {
    setConfirmDialog({ ...opts, open: true });
  }, []);

  const handleResetLevel = () => {
    if (!level) return;
    openConfirm({
      title: `Reiniciar ${level.title}`,
      description: `Se eliminará todo tu progreso en las ${level.lessons.length} lecciones de este nivel. Esta acción no se puede deshacer.`,
      confirmLabel: 'Reiniciar nivel',
      onConfirm: () => {
        resetLevel(level.id);
        toast.success(`Progreso del ${level.title} reiniciado`);
      },
    });
  };

  const handleResetLesson = (lessonId: string, lessonTitle: string) => {
    openConfirm({
      title: 'Reiniciar lección',
      description: `Se eliminará tu progreso en "${lessonTitle}". Volverás a empezarla desde el principio.`,
      confirmLabel: 'Reiniciar lección',
      onConfirm: () => {
        resetLesson(lessonId);
        toast.success(`Progreso de "${lessonTitle}" reiniciado`);
      },
    });
  };

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
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{level.icon}</span>
            <div>
              <p className="text-sm font-medium text-primary">Nivel {level.number} · {level.subtitle}</p>
              <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{level.title}</h1>
            </div>
          </div>
          {hasAnyProgress && (
            <Button
              variant="outline"
              size="sm"
              className="shrink-0 text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleResetLevel}
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
              Reiniciar nivel
            </Button>
          )}
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
          const hasProgress = isCompleted || isInProgress;

          return (
            <div
              key={lesson.id}
              className={`animate-fade-in-up stagger-${i + 1}`}
            >
              <Card className={`transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${isCompleted ? 'border-success/30 bg-success/5' : isInProgress ? 'border-primary/30 bg-primary/5' : ''}`}>
                <CardContent className="flex items-center gap-4 py-4">
                  {/* Status Icon */}
                  <Link to={`/courses/${level.slug}/${lesson.slug}`} className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    ) : isInProgress ? (
                      <PlayCircle className="h-6 w-6 text-primary animate-pulse-glow rounded-full" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground/40" />
                    )}
                  </Link>

                  {/* Content */}
                  <Link to={`/courses/${level.slug}/${lesson.slug}`} className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">Lección {lesson.number}</span>
                      {isCompleted && lp?.bestQuizAttempt && (
                        <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/30">
                          Quiz: {lp.bestQuizAttempt.score}%
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-medium hover:text-primary transition-colors truncate">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{lesson.description}</p>
                  </Link>

                  {/* Duration */}
                  <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                    {lesson.durationMinutes} min
                  </div>

                  {/* Reset button — always visible when lesson has progress */}
                  {hasProgress && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="shrink-0 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResetLesson(lesson.id, lesson.title);
                      }}
                    >
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Reiniciar
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <ConfirmDialog
        open={confirmDialog.open}
        onOpenChange={(open) => setConfirmDialog((prev) => ({ ...prev, open }))}
        title={confirmDialog.title}
        description={confirmDialog.description}
        confirmLabel={confirmDialog.confirmLabel}
        variant="destructive"
        onConfirm={confirmDialog.onConfirm}
      />
    </div>
  );
}
