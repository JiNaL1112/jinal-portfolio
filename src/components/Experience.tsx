import { experience, education } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// work_history</p>
          <h2 className="section-title">Professional Experience</h2>
          <div className="glow-line" />
        </div>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.entry}>
              {/* Timeline indicator */}
              <div className={styles.indicator}>
                <div className={styles.dot} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Content */}
              <div className={`card ${styles.card}`}>
                <div className={styles.top}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <div className={styles.company}>
                      <span className={styles.companyName}>{job.company}</span>
                      <span className={styles.sep}>·</span>
                      <span className={styles.location}>{job.location}</span>
                    </div>
                  </div>
                  <div className={styles.period}>
                    <span className={styles.periodBadge}>{job.period}</span>
                    {i === 0 && <span className={styles.currentBadge}>Current</span>}
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {job.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.bullet}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.eduSection}>
          <p className="section-label" style={{ marginBottom: '24px' }}>// education</p>
          <div className={styles.eduGrid}>
            {education.map((edu, i) => (
              <div key={i} className={`card ${styles.eduCard}`}>
                <div className={styles.eduIcon}>🎓</div>
                <div>
                  <h4 className={styles.eduDegree}>{edu.degree}</h4>
                  <p className={styles.eduMeta}>{edu.institution} · {edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
