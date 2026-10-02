/**
 * useScroll — single shared, passive, rAF-throttled scroll listener.
 * Subscribe/unsubscribe pattern: components call subscribe() and unsubscribe()
 * rather than adding separate window listeners.
 *
 * Returns { scrollY, direction, isPast20 }
 */
import { useState, useEffect } from 'react';

// ── Shared scroll state ───────────────────────────────────────────────────────
let listeners = new Set();
let ticking    = false;
let lastY      = typeof window !== 'undefined' ? window.scrollY : 0;
let currentY   = lastY;
let direction  = 'down';
let isPast20   = lastY > 20;

function onScroll() {
  currentY = window.scrollY;
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      direction  = currentY >= lastY ? 'down' : 'up';
      isPast20   = currentY > 20;
      lastY      = currentY;
      ticking    = false;
      listeners.forEach(fn => fn({ scrollY: currentY, direction, isPast20 }));
    });
  }
}

let listenerAttached = false;

function ensureListener() {
  if (!listenerAttached && typeof window !== 'undefined') {
    window.addEventListener('scroll', onScroll, { passive: true });
    listenerAttached = true;
  }
}

function maybeRemoveListener() {
  if (listenerAttached && listeners.size === 0) {
    window.removeEventListener('scroll', onScroll);
    listenerAttached = false;
  }
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useScroll() {
  const [state, setState] = useState({
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    direction: 'down',
    isPast20: typeof window !== 'undefined' ? window.scrollY > 20 : false,
  });

  useEffect(() => {
    ensureListener();
    listeners.add(setState);

    return () => {
      listeners.delete(setState);
      maybeRemoveListener();
    };
  }, []);

  return state;
}
