// src/components/Homelab.tsx
// Add { href: '#homelab', label: 'Homelab' } to navLinks in Navbar.tsx

import { useNavigate } from 'react-router-dom';
import styles from './Homelab.module.css';

const nodes = [
  { role: 'Control Plane',  name: 'HP Laptop',        specs: 'Intel · 8GB RAM · 1TB SSD · Ubuntu 24.04 Desktop',       isControl: true  },
  { role: 'Worker Node 01', name: 'Beelink MINI S12',  specs: 'Intel N95 · 12GB LPDDR5 · 256GB · Ubuntu Server 24.04',  isControl: false },
  { role: 'Worker Node 02', name: 'Beelink MINI S12',  specs: 'Intel N95 · 12GB LPDDR5 · 256GB · Ubuntu Server 24.04',  isControl: false },
];

const stack = [
  { label: 'Kubernetes', value: 'v1.29 · kubeadm' },
  { label: 'Runtime',    value: 'containerd v1.7.14' },
  { label: 'CNI',        value: 'Calico · Tigera Operator' },
  { label: 'GitOps',     value: 'ArgoCD' },
  { label: 'Monitoring', value: 'Prometheus + Grafana' },
  { label: 'Ingress',    value: 'Nginx Ingress Controller' },
];

export default function Homelab() {
  const navigate = useNavigate();

  return (
    <section id="homelab">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// bare_metal_k8s</p>
          <h2 className="section-title">Homelab</h2>
          <div className="glow-line" />
          <p className={styles.intro}>
            A production-grade, bare-metal Kubernetes cluster built with kubeadm on 2 Beelink
            Mini PCs and an HP Laptop. No managed services. No monthly bill.
            Everything broken intentionally — the fastest way to understand Kubernetes.
          </p>
        </div>

        {/* Node cards */}
        <div className={styles.nodesGrid}>
          {nodes.map(node => (
            <div
              key={node.role}
              className={`${styles.nodeCard} ${node.isControl ? styles.controlPlane : ''}`}
            >
              <div className={styles.nodeBadge}>
                <span className={`${styles.dot} ${node.isControl ? styles.dotGreen : styles.dotBlue}`} />
                {node.role}
              </div>
              <div className={styles.nodeName}>{node.name}</div>
              <p className={styles.nodeSpecs}>{node.specs}</p>
              <div className={styles.nodeStatus}>
                <span className={styles.pulsingDot} />
                Ready
              </div>
            </div>
          ))}
        </div>

        {/* Stack + CTA */}
        <div className={styles.bottom}>
          <div className={`card ${styles.stackCard}`}>
            <p className={styles.stackLabel}>// cluster_stack</p>
            <div className={styles.stackList}>
              {stack.map(item => (
                <div key={item.label} className={styles.stackItem}>
                  <span className={styles.stackKey}>{item.label}</span>
                  <span className={styles.stackVal}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow} />
            <div className={styles.ctaInner}>
              <p className={styles.ctaLabel}>// deep_dive</p>
              <h3 className={styles.ctaTitle}>
                See the Full<br />
                <span className={styles.ctaAccent}>Build</span>
              </h3>
              <p className={styles.ctaBody}>
                Hardware decisions, every kubeadm step, the Calico disaster,
                and what nobody warns you about when running bare-metal Kubernetes.
              </p>
              <div className={styles.ctaBtns}>
                <button className={styles.btnPrimary} onClick={() => navigate('/homelab')}>
                  View Homelab Page <span>→</span>
                </button>
                <a
                  href="https://medium.com/@jinalpatel11121999/how-i-built-my-kubernetes-homelab-with-2-mini-pcs-and-a-laptop-what-nobody-warns-you-about-478f6116021e"
                  target="_blank" rel="noreferrer"
                  className={styles.btnOutline}
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}