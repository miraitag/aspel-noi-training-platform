/**
 * Quiz ViewModel — presentation logic for quiz taking.
 */

import { useMemo, useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { noiCourse } from '@/domain/content';
import { useProgressStore } from '@/presentation/features/courses/store/useProgressStore';
import type { QuizAttempt } from '@/domain/models/progress.model';

export function useQuizViewModel() {
  const { levelSlug, lessonSlug } = useParams<{ levelSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const { hydrate, isHydrated, saveQuizAttempt, getLessonProgress } = useProgressStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

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

  const quiz = lesson?.quiz ?? null;

  const progress = useMemo(
    () => (lesson ? getLessonProgress(lesson.id) : null),
    [lesson, getLessonProgress]
  );

  // Initialize answers array
  useEffect(() => {
    if (quiz) {
      setSelectedAnswers(new Array(quiz.questions.length).fill(null));
    }
  }, [quiz]);

  const currentQuestion = quiz?.questions[currentQuestionIndex] ?? null;

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      if (isSubmitted) return;
      setSelectedAnswers((prev) => {
        const next = [...prev];
        next[currentQuestionIndex] = answerIndex;
        return next;
      });
    },
    [currentQuestionIndex, isSubmitted]
  );

  const nextQuestion = useCallback(() => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setShowExplanation(false);
    }
  }, [quiz, currentQuestionIndex]);

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex]);

  const submitQuiz = useCallback(() => {
    if (!quiz || !lesson) return;

    const correctCount = quiz.questions.reduce((count, q, i) => {
      return count + (selectedAnswers[i] === q.correctAnswer ? 1 : 0);
    }, 0);

    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = score >= quiz.passingScore;

    const attempt: QuizAttempt = {
      quizId: quiz.id,
      lessonId: lesson.id,
      answers: selectedAnswers.map((a) => a ?? -1),
      score,
      passed,
      attemptedAt: new Date().toISOString(),
    };

    saveQuizAttempt(attempt);
    setIsSubmitted(true);
    setShowExplanation(true);
    setCurrentQuestionIndex(0);
  }, [quiz, lesson, selectedAnswers, saveQuizAttempt]);

  const retryQuiz = useCallback(() => {
    if (quiz) {
      setSelectedAnswers(new Array(quiz.questions.length).fill(null));
      setIsSubmitted(false);
      setShowExplanation(false);
      setCurrentQuestionIndex(0);
    }
  }, [quiz]);

  const goBackToLesson = useCallback(() => {
    if (level && lesson) {
      navigate(`/courses/${level.slug}/${lesson.slug}`);
    }
  }, [level, lesson, navigate]);

  const allAnswered = selectedAnswers.every((a) => a !== null);

  // Compute results
  const results = useMemo(() => {
    if (!isSubmitted || !quiz) return null;
    const correctCount = quiz.questions.reduce((count, q, i) => {
      return count + (selectedAnswers[i] === q.correctAnswer ? 1 : 0);
    }, 0);
    const score = Math.round((correctCount / quiz.questions.length) * 100);
    return {
      score,
      passed: score >= quiz.passingScore,
      correctCount,
      totalQuestions: quiz.questions.length,
      passingScore: quiz.passingScore,
    };
  }, [isSubmitted, quiz, selectedAnswers]);

  return {
    level,
    lesson,
    quiz,
    progress,
    currentQuestionIndex,
    currentQuestion,
    totalQuestions: quiz?.questions.length ?? 0,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    submitQuiz,
    retryQuiz,
    goBackToLesson,
    isSubmitted,
    showExplanation,
    allAnswered,
    results,
  };
}
