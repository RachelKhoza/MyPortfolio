export const githubProfileUrl = 'https://github.com/RachelKhoza';
export const githubRepoBaseUrl = `${githubProfileUrl}`;

export const projectTracks = [
  {
    id: 'secure-cicd-starter',
    title: 'Secure CI/CD Starter',
    stage: 'Ready to publish',
    repoName: 'secure-cicd-starter',
    repoUrl: `${githubRepoBaseUrl}/secure-cicd-starter`,
    summary:
      'Reusable GitHub Actions templates for building, scanning, signing, and releasing container services with security gates that engineers can copy into real repositories.',
    result:
      'Shows practical shift-left delivery: secrets detection, SAST, IaC checks, SBOM generation, image scanning, and signed artifacts in one pipeline.',
    stack: ['GitHub Actions', 'Gitleaks', 'Semgrep', 'Checkov', 'Trivy', 'Syft', 'Cosign'],
    proof: [
      'Pull request annotations for security findings',
      'SARIF uploads into GitHub code scanning',
      'SBOM artifact attached to every release',
      'Documented break-glass bypass with expiry',
    ],
    buildPlan: [
      'Create reusable workflow files under .github/workflows/',
      'Add sample Docker app and Terraform module with known passing controls',
      'Publish screenshots of successful and failed security gates',
      'Write a recruiter-friendly README with architecture and tradeoffs',
    ],
    recruiterSignal:
      'Gives hiring teams a fast way to see how you design DevSecOps guardrails, not just list scanner names.',
  },
  {
    id: 'terraform-azure-landing-zone-lite',
    title: 'Terraform Azure Landing Zone Lite',
    stage: 'Next build',
    repoName: 'terraform-azure-landing-zone-lite',
    repoUrl: `${githubRepoBaseUrl}/terraform-azure-landing-zone-lite`,
    summary:
      'Small but realistic Azure landing zone module with identity, networking, policy, tagging, budget, logging, and least-privilege defaults.',
    result:
      'Demonstrates cloud platform engineering, secure-by-default infrastructure, and governance-as-code for regulated teams.',
    stack: ['Terraform', 'Azure', 'Azure Policy', 'Checkov', 'OPA', 'GitHub OIDC'],
    proof: [
      'Terraform plan output captured in CI',
      'Checkov and policy-as-code reports',
      'Module examples for dev, test, and prod',
      'Security decision records for each baseline control',
    ],
    buildPlan: [
      'Scaffold reusable Terraform modules for resource groups, networking, diagnostics, and policy assignments',
      'Add example environments with tfvars templates and no secrets',
      'Add GitHub Actions validation: fmt, validate, tflint, checkov, plan',
      'Document how OIDC avoids static Azure credentials in CI',
    ],
    recruiterSignal:
      'Proves you can design the cloud foundation teams deploy onto, including controls and developer experience.',
  },
  {
    id: 'kubernetes-security-baseline',
    title: 'Kubernetes Security Baseline',
    stage: 'Next build',
    repoName: 'kubernetes-security-baseline',
    repoUrl: `${githubRepoBaseUrl}/kubernetes-security-baseline`,
    summary:
      'AKS/EKS-ready hardening baseline with namespaces, network policies, RBAC, admission controls, image scanning, and secure Helm examples.',
    result:
      'Shows container platform depth: workload identity, policy enforcement, runtime visibility, and deployable secure defaults.',
    stack: ['Kubernetes', 'Helm', 'OPA Gatekeeper', 'Trivy', 'Falco', 'Prometheus'],
    proof: [
      'Policy tests for privileged pods and unsafe capabilities',
      'NetworkPolicy examples with allowed and denied flows',
      'Helm chart lint and template validation in CI',
      'Runtime detection runbook for suspicious container behavior',
    ],
    buildPlan: [
      'Create a local kind-based demo cluster path',
      'Add Gatekeeper constraints for pod security and image provenance',
      'Ship secure and insecure sample workloads to prove the gates',
      'Add diagrams for request flow, policy flow, and alert flow',
    ],
    recruiterSignal:
      'Moves your profile beyond pipeline tooling into platform security and production Kubernetes thinking.',
  },
  {
    id: 'sonarqube-trivy-devsecops-lab',
    title: 'SonarQube + Trivy DevSecOps Lab',
    stage: 'Portfolio lab',
    repoName: 'sonarqube-trivy-devsecops-lab',
    repoUrl: `${githubRepoBaseUrl}/sonarqube-trivy-devsecops-lab`,
    summary:
      'Hands-on lab that builds a Java or Node service, runs code quality and security checks, scans the container image, and publishes findings.',
    result:
      'Turns tutorial-style DevSecOps learning into your own working lab with screenshots, pipeline logs, and clear remediation notes.',
    stack: ['Jenkins', 'SonarQube', 'Trivy', 'Docker', 'Maven or Node', 'GitHub'],
    proof: [
      'Pipeline screenshots for build, quality gate, and security scan',
      'Before-and-after remediation commit history',
      'Documented false-positive handling',
      'Docker Compose lab setup for local reproduction',
    ],
    buildPlan: [
      'Create docker-compose.yml for Jenkins and SonarQube',
      'Add a sample app with intentional low-risk findings',
      'Write Jenkinsfile stages for build, unit test, SonarQube, Trivy, and publish',
      'Capture results in README and link from the portfolio page',
    ],
    recruiterSignal:
      'Makes your GitHub activity visible and practical for DevOps interviews that ask for CI, scanning, and troubleshooting proof.',
  },
  {
    id: 'cloud-cost-governance-bot',
    title: 'Cloud Cost Governance Bot',
    stage: 'Differentiator',
    repoName: 'cloud-cost-governance-bot',
    repoUrl: `${githubRepoBaseUrl}/cloud-cost-governance-bot`,
    summary:
      'Python automation that reviews cloud inventory exports, flags cost and governance drift, and opens actionable GitHub issues.',
    result:
      'Combines FinOps, governance, automation, and security hygiene into a project that speaks to senior platform roles.',
    stack: ['Python', 'GitHub Actions', 'Azure Cost Management', 'AWS Cost Explorer', 'Markdown reports'],
    proof: [
      'Sample CSV inventory input with anonymised data',
      'Generated governance report',
      'GitHub issue creation dry-run mode',
      'Unit tests around tagging and budget rules',
    ],
    buildPlan: [
      'Define cost and tag policy rules in YAML',
      'Parse sample Azure and AWS export files locally',
      'Generate a markdown report for pull requests',
      'Add dry-run GitHub issue creation for drift items',
    ],
    recruiterSignal:
      'Shows the business side of platform engineering: controls, cost, and automation that leaders care about.',
  },
  {
    id: 'cloud-incident-response-runbooks',
    title: 'Cloud Incident Response Runbooks',
    stage: 'Writing plus automation',
    repoName: 'cloud-incident-response-runbooks',
    repoUrl: `${githubRepoBaseUrl}/cloud-incident-response-runbooks`,
    summary:
      'Operational runbooks and small automation scripts for leaked secret response, exposed storage, suspicious IAM changes, and vulnerable image rollout.',
    result:
      'Demonstrates incident thinking, communication, containment steps, and automation without exposing any employer-specific work.',
    stack: ['Bash', 'Python', 'AWS CLI', 'Azure CLI', 'GitHub Actions', 'Markdown'],
    proof: [
      'Runbooks with severity, owner, detection, containment, and recovery sections',
      'CLI scripts with dry-run defaults',
      'Post-incident review template',
      'Mapping to common controls such as least privilege and logging',
    ],
    buildPlan: [
      'Write four runbooks from realistic but anonymised scenarios',
      'Add scripts that validate access before changing anything',
      'Create tabletop exercise checklist',
      'Publish a blog post linking each runbook to platform controls',
    ],
    recruiterSignal:
      'Positions you as someone who can operate under pressure and build repeatable security response, not just deploy tools.',
  },
];

export const featuredProjectTracks = projectTracks.slice(0, 4);
