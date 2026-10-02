import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { Reveal } from '../../../components/Reveal/Reveal';
import styles from './WhySection.module.css';

const whyItems = [
  {
    num: '01',
    title: 'Built around your workflow',
    desc: 'Software shaped by how your team actually works.',
  },
  {
    num: '02',
    title: 'AI-native thinking',
    desc: 'Automation and intelligence considered from day one.',
  },
  {
    num: '03',
    title: 'Scalable architecture',
    desc: 'Systems designed to grow with you.',
  },
  {
    num: '04',
    title: 'Business-focused development',
    desc: 'Every feature tied to a business outcome.',
  },
  {
    num: '05',
    title: 'Modern user experiences',
    desc: 'Interfaces people enjoy using.',
  },
];

export default function WhySection() {
  return (
    <section className={`section ${styles.whySection}`}>
      <div className="container">
        <SectionHeader
          index="06"
          label="WHY CODE KOMPANY"
          title="Serious technology, built around you."
          intro="We replace generic software templates with purpose-built digital products."
        />

        {/* Row 1 (Items 01 - 03) */}
        <div className={styles.rowTop}>
          {whyItems.slice(0, 3).map((item, idx) => (
            <Reveal key={item.num} stagger={idx} className={styles.itemCard}>
              <span className={styles.numText}>{item.num}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* Row 2 (Items 04 - 05, offset right on desktop) */}
        <div className={styles.rowBottom}>
          {whyItems.slice(3, 5).map((item, idx) => (
            <Reveal key={item.num} stagger={idx + 3} className={styles.itemCard}>
              <span className={styles.numText}>{item.num}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
