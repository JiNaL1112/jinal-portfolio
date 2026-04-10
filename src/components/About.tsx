import { about } from '../data/portfolio';
import styles from './About.module.css';

const stats = [
  { value: '4+', label: 'Years in DevOps' },
  { value: '30+', label: 'CI/CD Pipelines Built' },
  { value: '6',   label: 'Certifications' },
  { value: '50+', label: 'Cloud Services Mastered' },
];

export default function About() {
  return (
    <section id="about-section" className={styles.section}>
      <div className="container">

        {/* ── Header ── */}
        <div className={styles.header}>
          <p className="section-label">// who_i_am</p>
          <h2 className="section-title">About</h2>
          <div className="glow-line" />
        </div>

        {/* ── Stats bar ── */}
        <div className={styles.statsGrid}>
          {stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Centered narrative ── */}
        <div className={styles.narrative}>
          <p className={styles.lead}>{about.lead}</p>
          {about.paragraphs.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}

          {/* Tags */}
          <div className={styles.tagRow}>
            {about.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}