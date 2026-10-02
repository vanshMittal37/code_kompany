/**
 * useInView — like useReveal but reports CONTINUOUSLY (for pausing
 * off-screen animations). Returns [ref, isInView].
 * Under reduced motion, always returns true so content stays visible.
 */
import { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useInView({
  threshold   = 0,
  rootMargin  = '0px',
} = {}) {
  const ref          = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(Boolean(reducedMotion));

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, reducedMotion]);

  return [ref, isInView];
}
