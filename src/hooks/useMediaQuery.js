/**
 * useMediaQuery — returns true when the CSS media query matches.
 * Useful for (hover: hover) detection, breakpoints, etc.
 */
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Convenience presets
export const HOVER_CAPABLE = '(hover: hover) and (pointer: fine)';
export const MOBILE_BREAK  = '(max-width: 899px)';
export const DESKTOP_BREAK = '(min-width: 900px)';
