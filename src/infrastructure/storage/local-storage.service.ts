/**
 * Typed localStorage wrapper.
 *
 * Provides a safe, type-aware abstraction over the browser's localStorage API.
 * Handles JSON serialization/deserialization and gracefully manages errors
 * (e.g., quota exceeded, invalid JSON).
 *
 * Pattern: Singleton via module scope (no class instantiation needed).
 */

export const localStorageService = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      return JSON.parse(item) as T;
    } catch {
      console.warn(`[LocalStorage] Failed to parse key "${key}"`);
      return null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`[LocalStorage] Failed to set key "${key}"`, error);
    }
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },

  clear(): void {
    localStorage.clear();
  },

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  },
};
