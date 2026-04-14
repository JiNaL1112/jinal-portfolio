export const profile = {
  name: "Jinal Patel",
  title: "DevOps Engineer",
  subtitle: "Azure Cloud | Platform Engineering | Cloud-Native Infrastructure",
  tagline: "DevOps Engineer building resilient, scalable cloud platforms and CI/CD systems — automating infrastructure, strengthening reliability, and keeping deployments fast, secure, and cost-efficient",
  location: "Kitchener, ON, Canada",
  email: "pateljinalben5521@gmail.com",
  linkedin: "https://www.linkedin.com/in/jinalbenp/",
  github: "https://github.com/JiNaL1112",
  medium: "https://medium.com/@jinalpatel11121999",
  phone: "+1 3658085159",
  experience: "4+ Years",
  // Replace with your actual photo path, e.g. "/images/profile.jpg"
  photo: "/images/profile.jpg",
};

export const about = {
  lead: "DevOps Engineer with 4+ years of hands-on experience automating cloud-native infrastructure on Azure and AWS, turning complex systems into reliable, scalable platforms that just work.",
  paragraphs: [
    "From my start at TatvaSoft to my current role at Technology Solutions in Canada, I've mastered the full stack of modern DevOps and platform engineering: provisioning multi-cloud environments with Terraform, ARM, and Bicep; orchestrating containerized apps on AKS/EKS with Helm, ArgoCD GitOps, and Kubernetes security tools like Trivy, Falco, and OPA Gatekeeper; and building CI/CD pipelines in Azure DevOps, GitHub Actions, and Jenkins that deliver zero-downtime deploys with built-in monitoring via Prometheus, Grafana, and Azure Monitor",
    "I've optimized costs with auto-scaling and right-sizing, secured clusters with RBAC, Key Vault, and Defender for Cloud, and driven event-driven architectures using Apache Kafka—all while mentoring teams on DevSecOps best practices. Certifications like CKA, CKAD, AZ-400, and Terraform Associate back my expertise",
    "When I'm not shipping production-grade infra, I tinker with a bare-metal Kubernetes homelab on mini PCs, break things to learn faster, and share insights on Medium. Let's generate cloud infrastructure that scales effortlessly."
  ],
  tags: ["Terraform", "Kubernetes", "Azure", "GitHub Actions", "ArgoCD", "Helm", "Prometheus", "Python"],
  traits: [
    {
      icon: "⚙",
      title: "Infrastructure as Code",
      body: "Everything reproducible. Terraform modules, Bicep templates, and ARM — I treat infra like software with tests, versioning, and CI.",
    },
    {
      icon: "⎈",
      title: "Kubernetes Native",
      body: "CKA & CKAD certified. Designed multi-cluster AKS environments with Helm, ArgoCD, and GitOps workflows for production workloads.",
    },
    {
      icon: "◎",
      title: "Observability First",
      body: "Prometheus, Grafana, ELK Stack, and Azure Monitor. I believe you can't operate what you can't see.",
    },
    {
      icon: "🔒",
      title: "Security Minded",
      body: "RBAC, Key Vault, OPA/Gatekeeper, Trivy, Falco — security baked into pipelines, not bolted on at the end.",
    },
  ],
};

export const certifications = [
  {
    name: "CKA",
    full: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    icon: "⎈",
    color: "#E8B84B",
    credlyUrl: "https://www.credly.com/badges/062bf268-9526-4f8a-8570-d9799ea598f9/public_url",
    imageUrl: "../public/badges/cka.png",
  },
  {
    name: "CKAD",
    full: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    icon: "⎈",
    color: "#FF8C42",
    credlyUrl: "https://www.credly.com/badges/27a33569-6001-403d-a34c-bd1e4ecaa23f/public_url",
    imageUrl: "../public/badges/ckad.png",
  },
  {
    name: "KCNA",
    full: "Kubernetes & Cloud Native Associate",
    issuer: "Cloud Native Computing Foundation",
    icon: "☁",
    color: "#E8B84B",
    credlyUrl: "https://www.credly.com/badges/ca19329d-9468-4314-bc72-276807171247/public_url",
    imageUrl: "../public/badges/kcna.png",
  },
  {
    name: "TF-003",
    full: "HashiCorp Terraform Associate (003)",
    issuer: "HashiCorp",
    icon: "◈",
    color: "#A07E2E",
    credlyUrl: "https://www.credly.com/badges/8eebc1e5-f9b2-4840-a448-41778b353acb/public_url",
    imageUrl: "../public/badges/terraform.png",
  },
  {
    name: "AZ-400",
    full: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    icon: "△",
    color: "#0078D4",
    credlyUrl: "https://www.credly.com/users/jinal-patel.e1e1a999",
    imageUrl: "../public/badges/az-400.png",
  },
  {
    name: "WES",
    full: "World Education Services Credential Evaluation",
    issuer: "World Education Services",
    icon: "🎓",
    color: "#FF8C42",
    credlyUrl: "https://www.credly.com/badges/430a1d7b-75f7-4aff-971e-c314ab3da225/public_url",
    imageUrl: "../public/badges/wes.png",
  },
];

export const skills = {
  "Cloud Platforms": ["Azure (AKS, VMs, Functions, APIM, Storage)", "AWS (EKS, EC2, S3, ECS, ELB)"],
  "IaC & Provisioning": ["Terraform", "ARM Templates", "Bicep", "Crossplane", "Pulumi"],
  "CI/CD & Automation": ["Azure DevOps", "GitHub Actions", "Jenkins"],
  "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "ArgoCD"],
  "Security & Compliance": ["Azure AD", "Key Vault", "RBAC", "Defender for Cloud", "SonarQube", "OPA/Gatekeeper", "Trivy", "Falco"],
  "Monitoring & Logging": ["Azure Monitor", "Log Analytics", "Prometheus", "Grafana", "ELK Stack"],
  "Scripting & Dev": ["PowerShell", "Bash", "Python", "Go", "YAML", "JSON"],
  "Databases": ["Azure SQL", "PostgreSQL", "MySQL", "Redis", "Cosmos DB"],
};

export const experience = [
  {
    role: "DevOps Engineer",
    company: "Technology Solutions",
    period: "Oct 2023 – Present",
    location: "Canada",
    highlights: [
      "Designed and managed robust CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins for automated, reliable deployments—accelerating software delivery and reducing manual intervention.",
"Provisioned cloud infrastructure with Terraform, ARM Templates, and Bicep, ensuring consistency across Azure environments while minimizing operational disruptions.",
"Optimized AKS clusters with Helm charts for high availability and scalability, enabling zero-downtime microservices deployments.",
"Implemented comprehensive monitoring with Azure Monitor, Log Analytics, and Application Insights for proactive issue detection and system reliability.",
"Enhanced security through RBAC, Azure AD, Key Vault, and Defender for Cloud, maintaining compliance and data protection standards"
    ],
  },
  {
    role: "DevOps Developer – Cloud",
    company: "Tatva Soft",
    period: "Jan 2021 – Sep 2023",
    location: "India",
    highlights: [
      "Built automated multi-cloud CI/CD pipelines with Azure DevOps, GitHub Actions, and Jenkins for AKS/EKS deployments, integrating Terraform for IaC and SonarQube for security scanning.",

"Automated infrastructure scaling and disaster recovery using Azure Scale Sets, Site Recovery, and Cost Management, reducing operational costs and downtime.",

"Collaborated on DevSecOps practices, embedding security in pipelines and mentoring junior engineers on Azure, Terraform, and Kubernetes best practices.",

"Performed performance tuning and incident management for Azure-hosted apps, boosting efficiency and responsiveness while managing cloud expenses via right-sizing."
    ],
  },
];

export const projects = [
  {
    title: "Azure Infrastructure with Terraform",
    description: "Scalable Azure infrastructure featuring VMSS, Load Balancer, and Autoscaling built with Terraform. Production-grade IaC with modular design patterns.",
    tags: ["Terraform", "Azure", "VMSS", "Load Balancer", "IaC"],
    github: "https://github.com/JiNaL1112/Terraform-Azure-Project1",
    article: "https://medium.com/@jinalpatel11121999/building-a-scalable-azure-infrastructure-with-terraform-vmss-load-balancer-autoscaling-aed061a7f591",
    type: "Infrastructure",
    image: "https://github.com/JiNaL1112/Terraform-Azure-Project1/blob/main/images/diagram-export-3-30-2026-6_58_35-PM.png?raw=true",
  },
  {
    title: "CloudOps Goal Tracker – Three-Tier Architecture",
    description: "Production-grade three-tier application on Azure with Terraform. Full networking, compute, and database layers following enterprise patterns.",
    tags: ["Terraform", "Azure", "Three-Tier", "Architecture", "DevOps"],
    github: "https://github.com/JiNaL1112/Azure_Terraform_Project_3",
    article: "https://medium.com/@jinalpatel11121999/building-a-production-grade-three-tier-application-on-azure-with-terraform-f54c0e8e31f7",
    type: "Architecture",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*your-article-image.png",
  },
  {
    title: "Automated Multi-Cloud CI/CD Pipeline",
    description: "End-to-end CI/CD for microservices deployment across Azure AKS and AWS EKS, with Helm charts, zero-downtime releases, and integrated security scanning.",
    tags: ["GitHub Actions", "AKS", "EKS", "Helm", "DevSecOps"],
    github: "https://github.com/JiNaL1112",
    type: "CI/CD",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*your-article-image.png",
  },
  {
    title: "Kubernetes Homelab – Multi-Node Cluster",
    description: "Built a Kubernetes homelab with 2 mini PCs and a laptop — full bare-metal cluster setup including networking, storage, and monitoring stack.",
    tags: ["Kubernetes", "Bare Metal", "Networking", "Prometheus", "Grafana"],
    article: "https://medium.com/@jinalpatel11121999/how-i-built-my-kubernetes-homelab-with-2-mini-pcs-and-a-laptop-what-nobody-warns-you-about-478f6116021e",
    type: "Kubernetes",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*your-article-image.png",
  },
];



export const education = [
  {
    degree: "Post-Graduate Diploma in Mobile Solutions Development",
    institution: "Canada",
    period: "May 2023 – Aug 2024",
  },
  {
    degree: "Bachelor's in Computer Science & Engineering",
    institution: "India",
    period: "May 2017 – Aug 2021",
  },
];