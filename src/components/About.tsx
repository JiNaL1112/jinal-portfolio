import styles from './About.module.css';

const stats = [
  { value: '4+', label: 'Years in DevOps' },
  { value: '30+', label: 'CI/CD Pipelines Built' },
  { value: '6', label: 'Certifications' },
  { value: '50+', label: 'Cloud Services Mastered' },
];



export default function About() {
  return (
    <section id="about-section" className={styles.section}>
      <div className="container">

        {/* ── Section label + title ── */}
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

        {/* ── Two-column layout ── */}
        <div className={styles.body}>

          {/* Left: narrative */}
          <div className={styles.narrative}>
            <p className={styles.lead}>
              I'm a <strong>DevOps Engineer</strong> based in Ottawa, ON, with 4+ years building
              cloud-native infrastructure on Azure and AWS — the kind that actually stays up.
            </p>

            <p>
              My path into DevOps was deliberately hands-on. I started as a developer, moved into
              platform engineering, and spent years at the intersection of infrastructure and
              automation — learning that the best systems aren't just functional, they're
              <strong> observable, reproducible, and cheap to operate</strong>.
            </p>

            <p>
              I've built scalable CI/CD pipelines from scratch, migrated teams from Azure DevOps to
              GitHub Actions, configured multi-cluster AKS environments with Helm and ArgoCD, and
              written enough Terraform to appreciate the value of a good module registry. Currently
              working at <strong>Technology Solutions</strong>, shipping infrastructure that
              developers don't have to think about.
            </p>

            <p>
              Outside work, I run a bare-metal Kubernetes homelab with 2 mini PCs and a laptop —
              because breaking things intentionally is the fastest way to understand them. I write
              about what I learn on <a href="https://medium.com/@jinalpatel11121999" target="_blank" rel="noreferrer" className={styles.inlineLink}>Medium</a>.
            </p>

            <div className={styles.tagRow}>
              {['Terraform', 'Kubernetes', 'Azure', 'GitHub Actions', 'ArgoCD', 'Helm', 'Prometheus', 'Python'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: trait cards */}
          <div className={styles.traits}>
            
          </div>
        </div>

      </div>
    </section>
  );
}
