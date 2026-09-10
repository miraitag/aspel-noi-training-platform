/**
 * LessonPage — Contenido de una lección con navegación por secciones.
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Lightbulb, AlertTriangle, Info, BookOpen, Calculator, Monitor, PenLine, Brain, AlertCircle, CheckCircle2 } from 'lucide-react';

import { Card, CardContent } from '@/presentation/shared/atoms/ui/card';
import { Badge } from '@/presentation/shared/atoms/ui/badge';
import { Button, buttonVariants } from '@/presentation/shared/atoms/ui/button';
import { ScrollArea } from '@/presentation/shared/atoms/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/presentation/shared/atoms/ui/accordion';
import { useLessonViewModel } from '../view-models/useLessonViewModel';
import type { LessonSectionType, Callout as CalloutType } from '@/domain/models/course.model';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const sectionIcons: Record<LessonSectionType, typeof BookOpen> = {
  'concept': BookOpen,
  'explanation': Info,
  'numeric-example': Calculator,
  'noi-procedure': Monitor,
  'guided-exercise': PenLine,
  'practice-exercise': Brain,
  'common-errors': AlertCircle,
};

const sectionLabels: Record<LessonSectionType, string> = {
  'concept': 'Concepto',
  'explanation': 'Explicación',
  'numeric-example': 'Ejemplo numérico',
  'noi-procedure': 'Procedimiento NOI',
  'guided-exercise': 'Ejercicio guiado',
  'practice-exercise': 'Ejercicio para ti',
  'common-errors': 'Errores frecuentes',
};

function CalloutBox({ callout }: { callout: CalloutType }) {
  const styles = {
    tip: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400',
    warning: 'border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-400',
    important: 'border-primary/30 bg-primary/5 text-primary',
    note: 'border-muted-foreground/30 bg-muted/50 text-muted-foreground',
  };
  const icons = {
    tip: Lightbulb,
    warning: AlertTriangle,
    important: AlertCircle,
    note: Info,
  };
  const Icon = icons[callout.type];

  return (
    <div className={`rounded-lg border p-4 my-4 ${styles[callout.type]}`}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">{callout.content}</p>
      </div>
    </div>
  );
}

export function LessonPage() {
  const {
    level, lesson, currentSection, currentSectionIndex, totalSections,
    isFirstSection, isLastSection, nextSection, prevSection,
    prevLesson, nextLesson, goToQuiz, goToSection,
  } = useLessonViewModel();

  if (!level || !lesson) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-lg text-muted-foreground">Lección no encontrada</p>
        <Link to="/courses" className={buttonVariants({ variant: "outline" })}>
          Volver a cursos
        </Link>
      </div>
    );
  }

  const SectionIcon = currentSection ? sectionIcons[currentSection.type] : BookOpen;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to={`/courses/${level.slug}`} className={buttonVariants({ variant: "ghost", size: "sm", className: "-ml-2" })}>
          <ArrowLeft className="h-3.5 w-3.5 mr-1" /> {level.title}
        </Link>
      </div>

      {/* Lesson Header */}
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium text-primary">Lección {lesson.number} de {level.lessons.length + (level.number - 1) * 10}</p>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl mt-1">{lesson.title}</h1>
        <p className="text-muted-foreground mt-2">{lesson.description}</p>

        {/* Objectives */}
        {lesson.objectives.length > 0 && (
          <div className="mt-4 rounded-lg border bg-card p-4">
            <h3 className="text-sm font-semibold mb-2">🎯 Objetivos de aprendizaje</h3>
            <ul className="space-y-1">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> {obj}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Section Navigation Tabs */}
      <ScrollArea className="w-full">
        <div className="flex gap-1 pb-2">
          {lesson.sections.map((section, i) => {
            const Icon = sectionIcons[section.type];
            const isActive = i === currentSectionIndex;
            return (
              <button
                key={section.id}
                onClick={() => goToSection(i)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {sectionLabels[section.type]}
              </button>
            );
          })}
        </div>
      </ScrollArea>

      {/* Current Section Content */}
      {currentSection && (
        <Card className="animate-fade-in-up" key={currentSection.id}>
          <CardContent className="py-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <SectionIcon className="h-5 w-5 text-primary" />
              <Badge variant="outline" className="text-xs">
                {sectionLabels[currentSection.type]}
              </Badge>
              <span className="text-xs text-muted-foreground ml-auto">
                {currentSectionIndex + 1} / {totalSections}
              </span>
            </div>

            <h2 className="text-xl font-semibold">{currentSection.title}</h2>

            {/* Render content with Markdown support */}
            <div className="prose prose-sm dark:prose-invert max-w-none w-full">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ ...props }) => (
                    <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium transition-colors" {...props} />
                  ),
                  table: ({ ...props }) => (
                    <div className="my-6 w-full overflow-hidden rounded-lg border bg-card shadow-sm">
                      <table className="w-full text-sm" {...props} />
                    </div>
                  ),
                  th: ({ ...props }) => (
                    <th className="bg-muted/50 px-4 py-3 text-left font-semibold text-muted-foreground" {...props} />
                  ),
                  td: ({ ...props }) => (
                    <td className="border-t border-border/50 px-4 py-3" {...props} />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote className="border-l-4 border-primary bg-primary/5 px-4 py-3 rounded-r-lg italic text-foreground/80 my-4" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc list-inside space-y-1.5 my-4" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="text-foreground/90 leading-relaxed" {...props} />
                  )
                }}
              >
                {currentSection.content}
              </ReactMarkdown>
            </div>

            {/* Code blocks */}
            {currentSection.codeBlocks?.map((block, i) => (
              <div key={i} className="rounded-lg border bg-muted/50 overflow-hidden">
                {block.label && (
                  <div className="px-4 py-2 border-b bg-muted/80 text-xs font-medium text-muted-foreground">
                    {block.label}
                  </div>
                )}
                <pre className="p-4 text-sm font-mono overflow-x-auto whitespace-pre leading-relaxed">
                  {block.code}
                </pre>
              </div>
            ))}

            {/* Steps */}
            {currentSection.steps && (
              <div className="space-y-2 mt-4">
                {currentSection.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-foreground/90 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Callouts */}
            {currentSection.callouts?.map((callout, i) => (
              <CalloutBox key={i} callout={callout} />
            ))}

            {/* Solution (if available) */}
            {currentSection.solution && (
              <div className="mt-8 pt-4 border-t border-border/50">
                <Accordion className="w-full">
                  <AccordionItem value="solution" className="border rounded-lg px-4 bg-primary/5">
                    <AccordionTrigger className="hover:no-underline text-primary font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Ver solución propuesta
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none w-full">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ ...props }) => (
                              <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium transition-colors" {...props} />
                            ),
                            table: ({ ...props }) => (
                              <div className="my-4 w-full overflow-hidden rounded-lg border bg-card shadow-sm">
                                <table className="w-full text-sm" {...props} />
                              </div>
                            ),
                            th: ({ ...props }) => (
                              <th className="bg-muted/50 px-4 py-2 text-left font-semibold text-muted-foreground" {...props} />
                            ),
                            td: ({ ...props }) => (
                              <td className="border-t border-border/50 px-4 py-2" {...props} />
                            ),
                            ul: ({ ...props }) => (
                              <ul className="list-disc list-inside space-y-1.5 my-2" {...props} />
                            ),
                            li: ({ ...props }) => (
                              <li className="text-foreground/90 leading-relaxed" {...props} />
                            )
                          }}
                        >
                          {currentSection.solution}
                        </ReactMarkdown>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Section Navigation */}
      <div className="flex items-center justify-between pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSection}
          disabled={isFirstSection}
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
        </Button>

        {isLastSection ? (
          <Button onClick={goToQuiz} className="gap-2">
            Ir al Mini Examen <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button size="sm" onClick={nextSection}>
            Siguiente <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>

      {/* Lesson Navigation */}
      <div className="flex items-center justify-between border-t pt-4 mt-4">
        {prevLesson ? (
          <Link
            to={`/courses/${level.slug}/${prevLesson.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Lección {prevLesson.number}: {prevLesson.title}
          </Link>
        ) : (
          <div />
        )}
        {nextLesson && (
          <Link
            to={`/courses/${level.slug}/${nextLesson.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Lección {nextLesson.number}: {nextLesson.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
