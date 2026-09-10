/**
 * Application-wide constants.
 * Single source of truth for magic strings and configuration values.
 */

export const APP_CONFIG = {
  name: 'Aspel NOI Training Platform',
  description: 'Plataforma de aprendizaje para Aspel NOI',
  version: '0.1.0',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  AUTH_USER: 'auth_user',
  THEME: 'theme',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  COURSES: '/courses',
  COURSE_LEVEL: '/courses/:levelSlug',
  COURSE_LESSON: '/courses/:levelSlug/:lessonSlug',
  COURSE_QUIZ: '/courses/:levelSlug/:lessonSlug/quiz',
  PROFILE: '/profile',
} as const;

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
} as const;
