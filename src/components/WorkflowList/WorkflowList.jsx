import { Reveal } from '../Reveal/Reveal';
import styles from './WorkflowList.module.css';

export default function WorkflowList({
  workflows = [],
  sectionIndex = '03',
  title = 'What we automate',
  closingLine = 'Free your team for strategic work while automation handles the routine.',
}) {
  if (!workflows || workflows.length === 0) return null;

  return (
    <section className={`section ${styles.workflowSection}`}>
      <div className="container">
        <Reveal className={`label ${styles.sectionLabel}`}>
          ({sectionIndex}) — WORKFLOW AUTOMATION
        </Reveal>

        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.list}>
          {workflows.map((item, idx) => (
            <Reveal key={item} stagger={idx} className={styles.itemRow}>
              <span className={styles.marker} aria-hidden="true">✦</span>
              <span className={styles.itemText}>{item}</span>
            </Reveal>
          ))}
        </div>

        {closingLine && (
          <Reveal delay={120} className={styles.closingWrap}>
            <p className={styles.closingLine}>{closingLine}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
