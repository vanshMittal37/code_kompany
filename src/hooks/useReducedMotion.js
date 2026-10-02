import { useState, useEffect } from 'react';

/**
 * useReducedMotion — returns true when the user prefers reduced motion.
 * Listens for changes so it responds to preference changes at runtime.
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReduced(e.matches);

    // Use addEventListener for modern browsers (addListener is deprecated)
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
