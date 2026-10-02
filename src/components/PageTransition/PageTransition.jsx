import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div key={location.pathname} className={styles.transitionWrap}>
      {children}
    </div>
  );
}
