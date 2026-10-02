import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Reveal } from '../Reveal/Reveal';
import styles from './SectionHeader.module.css';

export default function SectionHeader({
  index,
  label,
  title,
  intro,
  link,
  align = 'left',
  as: Component = 'h2',
  className = '',
}) {
  const indexStr = index ? `(${index}) — ` : '';
  const fullLabel = label ? `${indexStr}${label}` : indexStr;

  if (align === 'split') {
    return (
      <header className={`${styles.splitHeader} ${className}`}>
        <div className={styles.splitLeft}>
          {fullLabel && (
            <Reveal className={`label ${styles.labelTag}`}>{fullLabel}</Reveal>
          )}
          <SplitReveal as={Component} className={styles.title}>
            {title}
          </SplitReveal>
        </div>

        <div className={styles.splitRight}>
          {intro && (
            <Reveal delay={120} className={styles.intro}>
              {intro}
            </Reveal>
          )}
          {link && (
            <Reveal delay={200}>
              <Link to={link.to} className={styles.headerLink}>
                <span>{link.text}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className={`${styles.leftHeader} ${className}`}>
      {fullLabel && (
        <Reveal className={`label ${styles.labelTag}`}>{fullLabel}</Reveal>
      )}
      <SplitReveal as={Component} className={styles.title}>
        {title}
      </SplitReveal>
      {intro && (
        <Reveal delay={120} className={styles.intro}>
          {intro}
        </Reveal>
      )}
      {link && (
        <Reveal delay={200}>
          <Link to={link.to} className={styles.headerLink}>
            <span>{link.text}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      )}
    </header>
  );
}
