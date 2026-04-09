import { useEffect, useRef } from 'react';
import { profile, certifications } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      { text: '$ kubectl get nodes', delay: 0 },
      { text: 'NAME             STATUS   ROLES    AGE', delay: 600 },
      { text: 'jinal-node-01    Ready    control  3y', delay: 900 },
      { text: '$ terraform plan --auto-approve', delay: 1600 },
      { text: 'Plan: 12 to add, 0 to change, 0 to destroy.', delay: 2200 },
      { text: '✓ Apply complete! Resources: 12 added.', delay: 2800 },
    ];

    lines.forEach(({ text, delay }) => {
      setTimeout(() => {
        if (!terminalRef.current) return;
        const line = document.createElement('div');
        line.className = styles.termLine;
        line.textContent = text;
        terminalRef.current.appendChild(line);
      }, delay);
    });
  }, []);

  return (
    <section className={styles.hero} id="about">
      {/* Radial glow background */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className="container">
        <div className={styles.grid}>
          {/* Left: Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              Available for opportunities
            </div>

            <h1 className={styles.name}>
              {profile.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? styles.nameAccent : ''}>
                  {word}{i < profile.name.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>

            <div className={styles.titleRow}>
              <span className={styles.titleMono}>&gt; </span>
              <span className={styles.title}>{profile.title}</span>
            </div>

            <p className={styles.tagline}>{profile.tagline}</p>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <span className={styles.metaIcon}>◎</span>
                {profile.location}
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaIcon}>⏱</span>
                {profile.experience} Experience
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaIcon}>✦</span>
                6 Certifications
              </span>
            </div>

            <div className={styles.actions}>
              <a href="#contact" className={styles.btnPrimary}>
                Get In Touch
                <span className={styles.arrow}>→</span>
              </a>
              <a href="#projects" className={styles.btnSecondary}>
                View Projects
              </a>
              <a href="https://github.com/JiNaL1112" target="_blank" rel="noreferrer" className={styles.btnIcon} title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jinalbenp/" target="_blank" rel="noreferrer" className={styles.btnIcon} title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Terminal + Stats */}
          <div className={styles.visual}>
            <div className={styles.terminal}>
              <div className={styles.termHeader}>
                <div className={styles.termDots}>
                  <span style={{ background: '#FF5F57' }} />
                  <span style={{ background: '#FFBD2E' }} />
                  <span style={{ background: '#28C840' }} />
                </div>
                <span className={styles.termTitle}>jinal@devops ~ zsh</span>
              </div>
              <div className={styles.termBody} ref={terminalRef} />
            </div>

            <div className={styles.certRow}>
              {certifications.slice(0, 3).map(cert => (
                <div key={cert.name} className={styles.certBadge} style={{ borderColor: cert.color + '40', background: cert.color + '10' }}>
                  <span className={styles.certIcon} style={{ color: cert.color }}>{cert.icon}</span>
                  <span className={styles.certName} style={{ color: cert.color }}>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Certifications', value: '6' },
            { label: 'CI/CD Pipelines Built', value: '30+' },
            { label: 'Cloud Services Mastered', value: '50+' },
          ].map(stat => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
