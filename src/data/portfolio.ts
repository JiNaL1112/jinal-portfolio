export const profile = {
  name: "Jinal Patel",
  title: "DevOps Engineer",
  subtitle: "Azure Cloud | Platform Engineering | Cloud-Native Infrastructure",
  tagline: "Automating the Hard Way to build resilient, secure, and scalable systems.",
  location: "Ottawa, ON, Canada",
  email: "pateljinalben5521@gmail.com",
  linkedin: "https://www.linkedin.com/in/jinalbenp/",
  github: "https://github.com/JiNaL1112",
  medium: "https://medium.com/@jinalpatel11121999",
  phone: "+1 3658085159",
  experience: "4+ Years",
};


export const certifications = [
  { name: "CKA", full: "Certified Kubernetes Administrator", icon: "⎈", color: "#E8B84B", credlyUrl: "https://www.credly.com/badges/062bf268-9526-4f8a-8570-d9799ea598f9/public_url" },
  { name: "CKAD", full: "Certified Kubernetes Application Developer", icon: "⎈", color: "#FF8C42", credlyUrl: "https://www.credly.com/badges/27a33569-6001-403d-a34c-bd1e4ecaa23f/public_url" },
  { name: "KCNA", full: "Kubernetes & Cloud Native Associate", icon: "☁", color: "#E8B84B", credlyUrl: "https://www.credly.com/badges/ca19329d-9468-4314-bc72-276807171247/public_url" },
  { name: "TF-003", full: "HashiCorp Terraform Associate (003)", icon: "◈", color: "#A07E2E", credlyUrl: "https://www.credly.com/badges/8eebc1e5-f9b2-4840-a448-41778b353acb/public_url" },
  { name: "AZ-400", full: "Azure DevOps Engineer Expert", icon: "△", color: "#E8B84B", credlyUrl: "https://www.credly.com/users/jinal-patel.e1e1a999" },
  { name: "WES", full: "World Education Services Credential Evaluation", icon: "🎓", color: "#FF8C42", credlyUrl: "https://www.credly.com/badges/430a1d7b-75f7-4aff-971e-c314ab3da225/public_url" },
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
      "Designed scalable CI/CD pipelines using GitHub Actions with reusable YAML workflows and templates",
      "Led migration initiatives from Azure DevOps to GitHub Actions, reducing operational overhead",
      "Built and maintained database CI/CD pipelines with automated schema versioning and testing",
      "Implemented IaC using ARM templates, Terraform, Azure CLI, and Azure PowerShell",
      "Configured monitoring with ELK Stack, Prometheus, and Grafana for full system observability",
      "Integrated automated validation, quality gates, and approval workflows into CI/CD pipelines",
    ],
  },
  {
    role: "DevOps Developer – Cloud",
    company: "Tatva Soft",
    period: "Jan 2021 – Sep 2023",
    location: "India",
    highlights: [
      "Managed cloud infrastructure with Terraform, ARM Templates, and Bicep at scale",
      "Configured AKS clusters for microservices with Helm charts ensuring high availability",
      "Implemented RBAC policies, Azure AD authentication, and Key Vault secrets management",
      "Engineered Docker containerization and Kubernetes deployments for multi-cloud environments",
      "Reduced operational costs via Azure Cost Management and right-sizing strategies",
      "Mentored junior DevOps engineers in Azure DevOps, Terraform, and Kubernetes best practices",
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

export const articles = [
  {
    title: "How I Built My Kubernetes Homelab with 2 Mini PCs and a Laptop",
    subtitle: "What Nobody Warns You About",
    date: "Apr 2026",
    url: "https://medium.com/@jinalpatel11121999/how-i-built-my-kubernetes-homelab-with-2-mini-pcs-and-a-laptop-what-nobody-warns-you-about-478f6116021e",
    tags: ["Kubernetes", "Homelab", "Bare Metal"],
  },
  {
    title: "How Kubernetes Requests and Limits Really Work",
    subtitle: "Resource management deep dive for engineers",
    date: "Feb 2026",
    url: "https://medium.com/@jinalpatel11121999/how-kubernetes-requests-and-limits-really-work-b9347db6f856",
    tags: ["Kubernetes", "Resource Management", "DevOps"],
  },
  {
    title: "How I Added a Remote EKS Cluster to Argo CD",
    subtitle: "Declarative, Secure, and Reproducible",
    date: "Nov 2025",
    url: "https://medium.com/@jinalpatel11121999/how-i-added-a-remote-eks-cluster-to-argo-cd-declarative-secure-and-reproducible-e5fd66411441",
    tags: ["ArgoCD", "EKS", "GitOps"],
  },
  {
    title: "Building a Scalable Azure Infrastructure with Terraform",
    subtitle: "VMSS, Load Balancer, and Autoscaling",
    date: "2024",
    url: "https://medium.com/@jinalpatel11121999/building-a-scalable-azure-infrastructure-with-terraform-vmss-load-balancer-autoscaling-aed061a7f591",
    tags: ["Terraform", "Azure", "IaC"],
  },
  {
    title: "Building a Production-Grade Three-Tier Application on Azure",
    subtitle: "With Terraform – Enterprise Architecture Patterns",
    date: "2024",
    url: "https://medium.com/@jinalpatel11121999/building-a-production-grade-three-tier-application-on-azure-with-terraform-f54c0e8e31f7",
    tags: ["Azure", "Terraform", "Architecture"],
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
