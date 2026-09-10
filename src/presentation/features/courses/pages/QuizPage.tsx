/**
 * QuizPage — Mini examen interactivo.
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/shared/atoms/ui/card';
import { Button, buttonVariants } from '@/presentation/shared/atoms/ui/button';
import { Progress } from '@/presentation/shared/atoms/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/presentation/shared/atoms/ui/radio-group';
import { Label } from '@/presentation/shared/atoms/ui/label';
import { useQuizViewModel } from '../view-models/useQuizViewModel';

export function QuizPage() {
  const {
    level, lesson, quiz, currentQuestionIndex, currentQuestion,
    totalQuestions, selectedAnswers, selectAnswer, nextQuestion,
    prevQuestion, submitQuiz, retryQuiz, goBackToLesson,
    isSubmitted, allAnswered, results,
  } = useQuizViewModel();

  if (!level || !lesson || !quiz) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-lg text-muted-foreground">Quiz no encontrado</p>
        <Link to="/courses" className={buttonVariants({ variant: "outline" })}>
          Volver a cursos
        </Link>
      </div>
    );
  }

  // Results view
  if (isSubmitted && results) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Button variant="ghost" size="sm" onClick={goBackToLesson} className="-ml-2">
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a la lección
        </Button>

        <Card className="animate-fade-in-up text-center">
          <CardHeader>
            <div className="mx-auto mb-4">
              {results.passed ? (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 mx-auto">
                  <Trophy className="h-10 w-10 text-success" />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mx-auto">
                  <XCircle className="h-10 w-10 text-destructive" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">
              {results.passed ? '¡Felicidades! 🎉' : 'Necesitas repasar 📚'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-5xl font-bold text-primary">{results.score}%</div>
            <p className="text-muted-foreground">
              {results.correctCount} de {results.totalQuestions} respuestas correctas
              {' · '}Aprobatorio: {results.passingScore}%
            </p>
            <Progress value={results.score} className="h-3 max-w-xs mx-auto" />

            {/* Question Review */}
            <div className="space-y-3 text-left mt-6">
              {quiz.questions.map((q, i) => {
                const isCorrect = selectedAnswers[i] === q.correctAnswer;
                return (
                  <div key={q.id} className={`rounded-lg border p-4 ${isCorrect ? 'border-success/30 bg-success/5' : 'border-destructive/30 bg-destructive/5'}`}>
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{q.question}</p>
                        {!isCorrect && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Tu respuesta: {q.options[selectedAnswers[i] ?? 0]} · Correcta: {q.options[q.correctAnswer]}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center pt-4">
              {!results.passed && (
                <Button variant="outline" onClick={retryQuiz}>
                  <RotateCcw className="h-4 w-4 mr-2" /> Intentar de nuevo
                </Button>
              )}
              <Button onClick={goBackToLesson}>
                {results.passed ? 'Continuar' : 'Repasar lección'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Quiz taking view
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Button variant="ghost" size="sm" onClick={goBackToLesson} className="-ml-2">
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver a la lección
      </Button>

      <div className="animate-fade-in-up">
        <p className="text-sm font-medium text-primary">Lección {lesson.number}</p>
        <h1 className="text-xl font-bold mt-1">{quiz.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{quiz.description}</p>
        <p className="text-xs text-muted-foreground mt-1">
          Aprobatorio: {quiz.passingScore}% · {totalQuestions} preguntas
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} className="h-2" />
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {currentQuestionIndex + 1}/{totalQuestions}
        </span>
      </div>

      {/* Question */}
      {currentQuestion && (
        <Card className="animate-fade-in-up" key={currentQuestion.id}>
          <CardContent className="py-6 space-y-6">
            <h2 className="text-lg font-semibold">{currentQuestion.question}</h2>

            <RadioGroup
              value={selectedAnswers[currentQuestionIndex]?.toString()}
              onValueChange={(val: string) => selectAnswer(Number(val))}
            >
              {currentQuestion.options.map((option, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-all ${
                    selectedAnswers[currentQuestionIndex] === i
                      ? 'border-primary bg-primary/5'
                      : 'hover:border-primary/30 hover:bg-accent/50'
                  }`}
                  onClick={() => selectAnswer(i)}
                >
                  <RadioGroupItem value={i.toString()} id={`opt-${i}`} />
                  <Label htmlFor={`opt-${i}`} className="text-sm cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Anterior
        </Button>

        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button size="sm" onClick={nextQuestion}>
            Siguiente <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={submitQuiz} disabled={!allAnswered}>
            Enviar respuestas
          </Button>
        )}
      </div>
    </div>
  );
}
