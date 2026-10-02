import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useMediaQuery, HOVER_CAPABLE } from '../../hooks/useMediaQuery';
import styles from './CursorBadge.module.css';

export default function CursorBadge() {
  const badgeRef = useRef(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('View');

  const reducedMotion = useReducedMotion();
  const canHover = useMediaQuery(HOVER_CAPABLE);

  // Position state for lerp
  const posRef = useRef({ currX: 0, currY: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (reducedMotion || !canHover) return;

    const onPointerMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      // Check if target or any ancestor has data-cursor
      const targetEl = e.target.closest('[data-cursor]');
      if (targetEl) {
        setActive(true);
        const customLabel = targetEl.getAttribute('data-cursor-label');
        setLabel(customLabel || 'View');
      } else {
        setActive(false);
      }
    };

    const loop = () => {
      const { currX, currY, targetX, targetY } = posRef.current;
      const lerpFactor = 0.2;
      const nextX = currX + (targetX - currX) * lerpFactor;
      const nextY = currY + (targetY - currY) * lerpFactor;

      posRef.current.currX = nextX;
      posRef.current.currY = nextY;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${nextX.toFixed(2)}px, ${nextY.toFixed(2)}px, 0) translate(-50%, -50%) scale(${active ? 1 : 0})`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, reducedMotion, canHover]);

  if (reducedMotion || !canHover) return null;

  return (
    <div
      ref={badgeRef}
      className={`${styles.badge} ${active ? styles.active : ''}`}
      aria-hidden="true"
    >
      <span className={styles.label}>{label}</span>
      <ArrowUpRight size={16} strokeWidth={2.5} />
    </div>
  );
}
