/**
 * CoursesOverviewPage — Roadmap visual del curso completo.
 */

import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, Target } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/shared/atoms/ui/card';
import { Badge } from '@/presentation/shared/atoms/ui/badge';
import { Progress } from '@/presentation/shared/atoms/ui/progress';
import { useCourseViewModel } from '../view-models/useCourseViewModel';
import type { LevelColor } from '@/domain/models/course.model';

const levelColorClasses: Record<LevelColor, string> = {
  green: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400',
  yellow: 'bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400',
  orange: 'bg-orange-500/10 text-orange-600 border-orange-500/30 dark:text-orange-400',
  red: 'bg-red-500/10 text-red-600 border-red-500/30 dark:text-red-400',
  fire: 'bg-rose-500/10 text-rose-600 border-rose-500/30 dark:text-rose-400',
};

const levelBadgeClasses: Record<LevelColor, string> = {
  green: 'bg-emerald-500 text-white',
  yellow: 'bg-amber-500 text-white',
  orange: 'bg-orange-500 text-white',
  red: 'bg-red-500 text-white',
  fire: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
};

export function CoursesOverviewPage() {
  const { course, summary, levelsWithProgress } = useCourseViewModel();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
          <span className="text-gradient">{course.title}</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{course.subtitle}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-3xl">{course.description}</p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up stagger-1">
        <Card className="glass">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.overallPercentage}%</div>
            <Progress value={summary.overallPercentage} className="mt-2 h-2" />
            <p className="mt-1 text-xs text-muted-foreground">
              {summary.totalLessonsCompleted}/{summary.totalLessons} lecciones
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nivel Actual</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Nivel {summary.currentLevel}</div>
            <p className="text-xs text-muted-foreground">
              {course.levels[summary.currentLevel - 1]?.title ?? 'Completado'}
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Aprobados</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.totalQuizzesPassed}</div>
            <p className="text-xs text-muted-foreground">de {summary.totalQuizzes} quizzes</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duración Total</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{course.totalHours}h</div>
            <p className="text-xs text-muted-foreground">{course.totalLevels} niveles · {course.totalLessons} lecciones</p>
          </CardContent>
        </Card>
      </div>

      {/* Levels Roadmap */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Ruta de Aprendizaje</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {levelsWithProgress.map((level, i) => (
            <Link
              key={level.id}
              to={`/courses/${level.slug}`}
              className={`animate-fade-in-up stagger-${i + 1}`}
            >
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${levelBadgeClasses[level.color]}`}>
                        {level.number}
                      </span>
                      <div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {level.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {level.icon} {level.subtitle} · {level.lessons.length} lecciones
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className={levelColorClasses[level.color]}>
                      {level.difficulty === 'beginner' && 'Principiante'}
                      {level.difficulty === 'intermediate' && 'Intermedio'}
                      {level.difficulty === 'advanced' && 'Avanzado'}
                      {level.difficulty === 'expert' && 'Experto'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{level.description}</p>
                  <div className="flex items-center gap-3">
                    <Progress value={level.progress.completionPercentage} className="h-1.5 flex-1" />
                    <span className="text-xs font-medium text-muted-foreground w-10 text-right">
                      {level.progress.completionPercentage}%
                    </span>
                  </div>
                  {level.progress.lessonsCompleted > 0 && (
                    <p className="text-xs text-muted-foreground">
                      {level.progress.lessonsCompleted}/{level.progress.totalLessons} lecciones completadas
                      {level.progress.isCompleted && ' ✅'}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
