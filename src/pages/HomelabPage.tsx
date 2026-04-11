import styles from './HomelabPage.module.css';

const nodes = [
  {
    role: 'Control Plane', isControl: true,
    name: 'HP Laptop',
    specs: [
      { k: 'CPU',     v: 'Intel (x86_64)' },
      { k: 'RAM',     v: '8 GB' },
      { k: 'Storage', v: '1 TB SSD' },
      { k: 'OS',      v: 'Ubuntu 24.04 Desktop' },
      { k: 'IP',      v: '10.0.0.191' },
    ],
  },
  {
    role: 'Worker Node 01', isControl: false,
    name: 'Beelink MINI S12',
    specs: [
      { k: 'CPU',     v: 'Intel N95 · 4C · 3.4GHz' },
      { k: 'RAM',     v: '12 GB LPDDR5' },
      { k: 'Storage', v: '256 GB SSD' },
      { k: 'Network', v: '2.5Gbps · WiFi 6' },
      { k: 'OS',      v: 'Ubuntu Server 24.04' },
    ],
  },
  {
    role: 'Worker Node 02', isControl: false,
    name: 'Beelink MINI S12',
    specs: [
      { k: 'CPU',     v: 'Intel N95 · 4C · 3.4GHz' },
      { k: 'RAM',     v: '12 GB LPDDR5' },
      { k: 'Storage', v: '256 GB SSD' },
      { k: 'Network', v: '2.5Gbps · WiFi 6' },
      { k: 'OS',      v: 'Ubuntu Server 24.04' },
    ],
  },
];

const stack = [
  { layer: 'OS — Control Plane',  tech: 'Ubuntu Desktop',           version: 'v24.04 LTS',  note: '' },
  { layer: 'OS — Worker Nodes',   tech: 'Ubuntu Server',            version: 'v24.04 LTS',  note: 'headless, no GUI' },
  { layer: 'Kubernetes',          tech: 'kubeadm (vanilla K8s)',    version: 'v1.29.6',     note: '' },
  { layer: 'Container Runtime',   tech: 'containerd',               version: 'v1.7.14',     note: 'SystemdCgroup enabled' },
  { layer: 'Low-level Runtime',   tech: 'runc',                     version: 'v1.1.12',     note: '' },
  { layer: 'CNI Plugin',          tech: 'Calico (Tigera Operator)', version: 'v3.28',       note: 'NetworkPolicy supported' },
  { layer: 'Package Manager',     tech: 'Helm',                     version: '',            note: 'Chart deployments' },
  { layer: 'GitOps',              tech: 'ArgoCD',                   version: '',            note: 'Declarative app delivery' },
  { layer: 'Monitoring',          tech: 'Prometheus + Grafana',     version: '',            note: 'Full metrics stack' },
  { layer: 'Ingress',             tech: 'Nginx Ingress Controller', version: '',            note: 'External traffic routing' },
  { layer: 'Node Metrics',        tech: 'Metrics Server',           version: '',            note: 'kubectl top enabled' },
];

const workloads = [
  { name: 'Prometheus + Grafana',      desc: 'Full observability stack. Node and pod-level metrics. kubectl top fully operational.' },
  { name: 'ArgoCD',                    desc: 'GitOps continuous delivery. Declarative app deployments synced from Git repositories.' },
  { name: 'Nginx Ingress Controller',  desc: 'External traffic routing. Hostname-based routing and TLS termination for apps.' },
  { name: 'Personal App Deployments',  desc: 'Real application workloads deployed via ArgoCD with Helm charts on worker nodes.' },
];

const security = [
  { control: 'runAsNonRoot',             value: 'true',           note: 'No root containers permitted' },
  { control: 'readOnlyRootFilesystem',   value: 'true',           note: 'Writable paths via emptyDir only' },
  { control: 'allowPrivilegeEscalation', value: 'false',          note: 'Applied cluster-wide' },
  { control: 'capabilities',             value: 'drop: ALL',      note: 'No Linux capabilities retained' },
  { control: 'NetworkPolicy',            value: 'Calico enforced', note: 'Pod-to-pod traffic explicitly scoped' },
];

const lessons = [
  {
    title: <>Always specify <span className={styles.badge}>--apiserver-advertise-address</span></>,
    body: "Your laptop has multiple network interfaces — ethernet, WiFi, loopback. Without this flag, kubeadm picks the wrong one silently. The cluster initializes, looks healthy, and misbehaves in confusing ways. Always set it explicitly with the correct local IP before running init.",
  },
  {
    title: 'CNI breaks? Clean the host — not just Kubernetes',
    body: <>Deleting and reapplying a CNI manifest does not clean config files written to the node filesystem. Run <span className={styles.badge}>rm -rf /etc/cni/net.d/*</span> on every node before reinstalling. Skipping this means the new installation inherits the broken state.</>,
  },
  {
    title: 'Calico Operator vs raw manifest',
    body: 'The manifest method stalled calico-node pods with CoreDNS stuck in Pending. Switching to the Tigera Operator fixed it completely. The Operator manages the full Calico lifecycle — for fresh installs, use the Operator from the start.',
  },
  {
    title: <><span className={styles.badge}>SystemdCgroup = true</span> is non-negotiable</>,
    body: "Without this in containerd's config, containerd and kubelet use different cgroup drivers and nodes will never reach Ready state. One line in a config file — easy to miss, easy to fix once you know it exists.",
  },
  {
    title: 'Identical worker nodes cut debugging time in half',
    body: 'Both Beelink units are same spec, same OS, same config. When something misbehaves on one worker, comparing it side-by-side with the identical second immediately tells you whether it\'s a node-specific or cluster-wide issue.',
  },
  {
    title: <><span className={styles.badge}>kubeadm reset</span> is a feature, not a failure</>,
    body: "This cluster was rebuilt multiple times before everything was clean. Each rebuild went faster. Don't be afraid to nuke it and start again — that's how you learn to operate it properly and confidently under pressure.",
  },
];

const roadmap = [
  { status: 'done',    label: '✓ Done',   title: 'Cluster Bootstrap',                sub: '3-node kubeadm cluster · Calico CNI · all system pods healthy' },
  { status: 'done',    label: '✓ Done',   title: 'Observability Stack',              sub: 'Prometheus + Grafana · kubectl top operational' },
  { status: 'done',    label: '✓ Done',   title: 'GitOps with ArgoCD',               sub: 'ArgoCD syncing from Git · Helm chart deployments' },
  { status: 'done',    label: '✓ Done',   title: 'Nginx Ingress + App Deployments',  sub: 'External routing · personal apps running on worker nodes' },
  { status: 'next',    label: '→ Next',   title: 'Persistent Storage',               sub: 'Longhorn or NFS PVCs · stateful workload lifecycle' },
  { status: 'next',    label: '→ Next',   title: 'Node Failure Simulation',          sub: 'Intentional worker kill · observe eviction and rescheduling' },
  { status: 'planned', label: 'Planned',  title: 'Kubernetes Version Upgrade',       sub: 'In-place kubeadm upgrade from v1.29 · full upgrade workflow' },
];

export default function HomelabPage() {
  return (
    <div className={styles.root}>

      {/* TOP BAR */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a href="/" className={styles.topbarBack}>← Portfolio</a>
          <span className={styles.topbarSep}>/</span>
          <span className={styles.topbarCrumb}>homelab</span>
          <div className={styles.topbarLive}>
            <span className={styles.liveDot} />
            Cluster Online
          </div>
        </div>
      </div>

      <div className={styles.page}>

        {/* HEADER */}
        <div className={styles.docHeader}>
          <div className={styles.docTag}>Self-Hosted · Bare Metal · Kubernetes</div>
          <h1 className={styles.docTitle}>Kubernetes Homelab</h1>
          <p className={styles.docDesc}>
            A production-grade, three-node Kubernetes cluster built from scratch using kubeadm
            on two Beelink Mini PCs and an HP Laptop. No managed services. No monthly bill.
            Everything broken intentionally — the fastest way to truly understand Kubernetes.
          </p>
          <div className={styles.docMeta}>
            <span>Jinal Patel</span>
            <span>·</span>
            <span>Apr 2026</span>
            <span>·</span>
            <a
              href="https://medium.com/@jinalpatel11121999/how-i-built-my-kubernetes-homelab-with-2-mini-pcs-and-a-laptop-what-nobody-warns-you-about-478f6116021e"
              target="_blank" rel="noreferrer"
              className={styles.docLink}
            >
              Read the Article ↗
            </a>
          </div>
        </div>

        {/* ── ARCHITECTURE ── */}
        <Section title="Architecture">
          <h3 className={styles.h3}>Hardware</h3>
          <div className={styles.nodeGrid}>
            {nodes.map(n => (
              <div key={n.role} className={`${styles.nodeCard} ${n.isControl ? styles.nodeCardCp : styles.nodeCardWorker}`}>
                <div className={styles.nodeRole}>
                  <span className={`${styles.nd} ${n.isControl ? styles.ndG : styles.ndB}`} />
                  {n.role}
                </div>
                <div className={styles.nodeName}>{n.name}</div>
                {n.specs.map(s => (
                  <div key={s.k} className={styles.ns}>
                    <span className={styles.nk}>{s.k}</span>
                    <span className={styles.nv}>{s.v}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h3 className={styles.h3}>Stack</h3>
          <table className={styles.table}>
            <thead>
              <tr><th>Layer</th><th>Technology</th><th>Version</th></tr>
            </thead>
            <tbody>
              {stack.map(s => (
                <tr key={s.layer}>
                  <td>{s.layer}</td>
                  <td className={styles.tdStrong}>{s.tech}</td>
                  <td>
                    {s.version && <span className={styles.badge}>{s.version}</span>}
                    {s.note && <span className={styles.tableNote}> — {s.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className={styles.h3}>Traffic Flow</h3>
          <div className={styles.flowBlock}>
            <div className={styles.fl}><span className={styles.ft}>External Client</span><span className={styles.fa}>→</span><span className={styles.ft}>Nginx Ingress Controller</span><span className={styles.fn}>(NodePort / LoadBalancer)</span></div>
            <div className={`${styles.fl} ${styles.flI}`}><span className={styles.fa}>→</span><span className={styles.ft}>ClusterIP Service</span></div>
            <div className={`${styles.fl} ${styles.flI}`}><span className={styles.fa}>→</span><span className={styles.ft}>Application Pod</span><span className={styles.fn}>(scheduled on worker node)</span></div>
            <div className={`${styles.fl} ${styles.flI}`}><span className={styles.fa}>→</span><span className={styles.ft}>Calico CNI</span><span className={styles.fn}>(pod networking · NetworkPolicy enforced)</span></div>
          </div>
        </Section>

        {/* ── PROVISIONING ── */}
        <Section title="Cluster Provisioning">
          <p className={styles.sectionIntro}>
            kubeadm is the hard way — and the right way for learning. Every component is installed manually.
            Worker nodes run Ubuntu Server: no GUI, no wasted RAM on a display manager.
            Both Beelink units are identical spec — intentional, for side-by-side debugging.
          </p>

          <h3 className={styles.h3}>Control Plane Init</h3>
          <pre className={styles.codeBlock}><code>
<span className={styles.cm}># Verify your actual local IP first</span>{'\n'}
<span className={styles.cmd}>ip addr show</span>{'\n\n'}
<span className={styles.cm}># 192.168.0.0/16 pod CIDR is required for Calico</span>{'\n'}
<span className={styles.cmd}>sudo kubeadm init</span> <span className={styles.flg}>\{'\n'}  --pod-network-cidr=192.168.0.0/16 \{'\n'}  --apiserver-advertise-address=10.0.0.191 \{'\n'}  --node-name master</span>{'\n\n'}
<span className={styles.cm}># Set up kubeconfig immediately</span>{'\n'}
<span className={styles.cmd}>mkdir -p $HOME/.kube</span>{'\n'}
<span className={styles.cmd}>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span>{'\n'}
<span className={styles.cmd}>sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
          </code></pre>

          <h3 className={styles.h3}>Worker Node Join</h3>
          <pre className={styles.codeBlock}><code>
<span className={styles.cm}># Run on each Beelink worker (SSH from control plane)</span>{'\n'}
<span className={styles.cmd}>sudo kubeadm join</span> <span className={styles.pth}>10.0.0.191:6443</span> <span className={styles.flg}>\{'\n'}  --token {'<your-token>'} \{'\n'}  --discovery-token-ca-cert-hash sha256:{'<your-hash>'}</span>{'\n\n'}
<span className={styles.cm}># Verify — wait 60-90s for Calico to initialise</span>{'\n'}
<span className={styles.cmd}>kubectl get nodes</span>{'\n'}
<span className={styles.cm}># NAME       STATUS   ROLES           VERSION{'\n'}# master     Ready    control-plane   v1.29.6{'\n'}# worker-01  Ready    {'<none>'}          v1.29.6{'\n'}# worker-02  Ready    {'<none>'}          v1.29.6</span>
          </code></pre>

          <h3 className={styles.h3}>Calico CNI — Tigera Operator Method</h3>
          <p className={styles.sectionIntro} style={{ marginBottom: 16 }}>
            The raw manifest method caused <span className={styles.badge}>calico-node</span> pods to stall with
            CoreDNS stuck in Pending. Switching to the Tigera Operator resolved it completely.
            Host-level cleanup is critical before reinstalling.
          </p>
          <pre className={styles.codeBlock}><code>
<span className={styles.cm}># If manifest install failed — clean ALL nodes first</span>{'\n'}
<span className={styles.cmd}>sudo rm -rf /etc/cni/net.d/*</span>{'\n'}
<span className={styles.cmd}>sudo rm -rf /var/lib/cni/</span>{'\n'}
<span className={styles.cmd}>sudo systemctl restart containerd</span>{'\n\n'}
<span className={styles.cm}># Install via Tigera Operator</span>{'\n'}
<span className={styles.cmd}>kubectl create -f</span> <span className={styles.pth}>https://...tigera-operator.yaml</span>{'\n'}
<span className={styles.cmd}>curl</span> <span className={styles.pth}>https://...custom-resources.yaml</span> <span className={styles.flg}>-O</span>{'\n'}
<span className={styles.cmd}>kubectl apply -f custom-resources.yaml</span>
          </code></pre>
        </Section>

        {/* ── WORKLOADS ── */}
        <Section title="Running Workloads">
          <p className={styles.sectionIntro}>All system pods healthy. The following workloads are deployed and running across worker nodes.</p>
          <div className={styles.workloadGrid}>
            {workloads.map(w => (
              <div key={w.name} className={styles.wlRow}>
                <span className={styles.wlDot} />
                <div>
                  <div className={styles.wlName}>{w.name}</div>
                  <div className={styles.wlDesc}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className={styles.h3}>Pod Security Controls</h3>
          <table className={styles.table}>
            <thead><tr><th>Control</th><th>Value</th><th>Notes</th></tr></thead>
            <tbody>
              {security.map(s => (
                <tr key={s.control}>
                  <td>{s.control}</td>
                  <td className={styles.tdStrong}>{s.value}</td>
                  <td>{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* ── LESSONS ── */}
        <Section title="What Nobody Warns You About">
          <div className={styles.lessonList}>
            {lessons.map((l, i) => (
              <div key={i} className={styles.lessonItem}>
                <div className={styles.ln}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className={styles.lt}>{l.title}</div>
                  <div className={styles.lb}>{l.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── ROADMAP ── */}
        <Section title="Roadmap">
          <div className={styles.roadmapList}>
            {roadmap.map(r => (
              <div key={r.title} className={styles.rmRow}>
                <span className={`${styles.badge} ${styles[`badge-${r.status}`]}`}>{r.label}</span>
                <div>
                  <div className={styles.rmTitle}>{r.title}</div>
                  <div className={styles.rmSub}>{r.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}
        <div className={styles.docFooter}>
          <div className={styles.flLeft}>
            $ kubectl get nodes — 3/3 <span className={styles.greenText}>Ready</span>
          </div>
          <div className={styles.flRight}>
            <a
              href="https://medium.com/@jinalpatel11121999/how-i-built-my-kubernetes-homelab-with-2-mini-pcs-and-a-laptop-what-nobody-warns-you-about-478f6116021e"
              target="_blank" rel="noreferrer" className={styles.flLink}
            >Full Article ↗</a>
            <a href="https://github.com/JiNaL1112" target="_blank" rel="noreferrer" className={styles.flLink}>GitHub ↗</a>
            <a href="/" className={styles.flLink}>← Portfolio</a>
          </div>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <hr className={styles.sep} />
      {children}
    </div>
  );
}