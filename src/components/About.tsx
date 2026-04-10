import styles from './About.module.css';
import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about-section" className={styles.section}>
      <div className="container">

        {/* ── Section label + title ── */}
        <div className={styles.header}>
          <p className={styles.sectionLabel}>WHO I AM</p>
          <h2 className={styles.sectionTitle}>About</h2>
        </div>

        {/* ── Stats bar ── */}
        <div className={styles.statsGrid}>
          {about.stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Narrative body ── */}
        <div className={styles.narrative}>
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              className={styles.para}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}