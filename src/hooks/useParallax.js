/**
 * useParallax — attaches a CSS translateY based on the element's
 * scroll position in the viewport (±40px range).
 * Uses the shared scroll listener. Disabled under reduced motion
 * and below 900px viewport width.
 * Returns a ref to attach to the element you want to move.
 */
import { useRef, useEffect, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { useMediaQuery, DESKTOP_BREAK } from './useMediaQuery';
import { useInView } from './useInView';

const MAX_OFFSET = 40; // px

export function useParallax(strength = 1) {
  const elRef        = useRef(null);
  const reducedMotion = useReducedMotion();
  const isDesktop    = useMediaQuery(DESKTOP_BREAK);
  const [inViewRef, isInView] = useInView({ threshold: 0 });

  // Merge refs
  const setRef = useCallback((node) => {
    elRef.current = node;
    inViewRef.current = node;
  }, [inViewRef]);

  useEffect(() => {
    const el = elRef.current;
    if (reducedMotion || !isDesktop || !el) return;

    let raf = null;

    const update = () => {
      raf = null;
      const rect   = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh     = window.innerHeight;
      // -1 when at top, 0 at center, +1 at bottom of viewport
      const rel    = (center - vh / 2) / (vh / 2);
      const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, rel * MAX_OFFSET * strength));
      el.style.transform = `translateY(${offset.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (!isInView) return;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (el) el.style.transform = '';
    };
  }, [reducedMotion, isDesktop, isInView, strength]);

  return setRef;
}
