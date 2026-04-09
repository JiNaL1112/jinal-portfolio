import { skills, certifications } from '../data/portfolio';
import styles from './Skills.module.css';

const categoryColors: Record<string, string> = {
  'Cloud Platforms': '#00D1FF',
  'IaC & Provisioning': '#7B42FF',
  'CI/CD & Automation': '#00FF94',
  'Containers & Orchestration': '#F78166',
  'Security & Compliance': '#FF7B72',
  'Monitoring & Logging': '#FFA657',
  'Scripting & Dev': '#A5D6FF',
  'Databases': '#D2A8FF',
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// tech_stack</p>
          <h2 className="section-title">Key Expertise</h2>
          <div className="glow-line" />
        </div>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span
                  className={styles.dot}
                  style={{ background: categoryColors[category] ?? '#00D1FF' }}
                />
                <h3 className={styles.category}>{category}</h3>
              </div>
              <div className={styles.tags}>
                {items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <p className="section-label" style={{ marginBottom: '24px' }}>// certifications</p>
          <div className={styles.certGrid}>
            {certifications.map(cert => (
              <div key={cert.name} className={`card ${styles.certCard}`}>
                <div className={styles.certTop}>
                  <span className={styles.certIcon} style={{ color: cert.color }}>{cert.icon}</span>
                  <span className={styles.certCode} style={{ color: cert.color, borderColor: cert.color + '40', background: cert.color + '10' }}>
                    {cert.name}
                  </span>
                </div>
                <p className={styles.certFull}>{cert.full}</p>
                <div className={styles.certBar}>
                  <div className={styles.certBarFill} style={{ background: cert.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
