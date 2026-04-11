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

        {/* ── Education ── */}
        <div className={styles.eduSection}>
          <p className="section-label" style={{ marginBottom: '32px' }}>// education</p>

          <div className={styles.eduGrid}>
            {education.map((edu, i) => (
              <div key={i} className={`card ${styles.eduCard}`}>
                {/* Top accent bar */}
                <div className={styles.eduAccent} />

                <div className={styles.eduInner}>
                  {/* Year badge */}
                  <div className={styles.eduYear}>
                    {edu.period.split('–')[1]?.trim() || edu.period}
                  </div>

                  {/* Icon */}
                  <div className={styles.eduIconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className={styles.eduContent}>
                    <h4 className={styles.eduDegree}>{edu.degree}</h4>
                    <div className={styles.eduMeta}>
                      <span className={styles.eduInstitution}>{edu.institution}</span>
                      <span className={styles.eduSep}>·</span>
                      <span className={styles.eduPeriod}>{edu.period}</span>
                    </div>
                  </div>

                  {/* Index number */}
                  <div className={styles.eduIndex}>0{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}