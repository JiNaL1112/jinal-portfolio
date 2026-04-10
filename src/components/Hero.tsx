import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.glow1} />

      <div className="container">
        <div className={styles.grid}>

          {/* ── LEFT: Content ── */}
          <div className={styles.content}>

            {/* Name */}
            <h1 className={styles.name}>{profile.name}</h1>

            {/* » Title */}
            <div className={styles.titleRow}>
              <span className={styles.titlePrefix}>»</span>
              <span className={styles.title}>{profile.title}</span>
            </div>

            {/* Tagline */}
            <p className={styles.tagline}>{profile.tagline}</p>

            {/* Open to opportunities badge */}
            <div className={styles.badge}>
              <span className={styles.dot} />
              Open to opportunities
            </div>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <a href="#projects" className={styles.btnPrimary}>
                View Projects
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles.btnOutline}>
                GitHub
              </a>
              <a href="#contact" className={styles.btnOutline}>
                Get in touch
              </a>
            </div>

          </div>

          {/* ── RIGHT: Photo ── */}
          <div className={styles.photoSide}>
            <div className={styles.photoFrame}>
              <img
                src={profile.photo}
                alt={profile.name}
                className={styles.photo}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <TerminalFallback />
            </div>
          </div>

        </div>

        {/* ── Stats bar ── */}
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

function TerminalFallback() {
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
    <div className={styles.terminal} style={{ display: 'none' }}>
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
  );
}