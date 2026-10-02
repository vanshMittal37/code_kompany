/**
 * useReveal — IntersectionObserver that fires ONCE when the element
 * enters the viewport.
 * Returns [ref, isVisible].
 * Under reduced motion, returns visible immediately.
 */
import { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useReveal({
  threshold   = 0.15,
  rootMargin  = '0px 0px -10% 0px',
  once        = true,
} = {}) {
  const ref          = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(Boolean(reducedMotion));

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, reducedMotion]);

  return [ref, isVisible];
}
