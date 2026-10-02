import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'ck-theme';
const DARK_META  = '#0B0B0C';
const LIGHT_META = '#F4F2EC';

/**
 * useTheme — manages the site colour theme.
 * Returns { theme, toggleTheme, setTheme }
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch {
      return 'dark';
    }
  });

  const applyTheme = useCallback((next) => {
    document.documentElement.dataset.theme = next;

    // Sync <meta name="theme-color">
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', next === 'dark' ? DARK_META : LIGHT_META);
    }

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  // On mount, ensure the DOM reflects the state (in case of SSR hydration diff)
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    applyTheme(next);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return { theme, toggleTheme, setTheme };
}
