---
title: "Project: Kubernetes Security Baseline"
description: "A Kubernetes security baseline for RBAC, network policies, admission controls, image scanning, and runtime detection thinking."
pubDate: 2026-06-21
tags: ["project", "kubernetes", "opa", "trivy", "container-security"]
---

This project is designed to prove container platform security depth without needing access to a private enterprise cluster.

The public repo will use a local `kind` cluster first, then document how the same controls map to AKS or EKS.

## What the repo will include

1. A local `kind` demo path.
2. Secure and intentionally insecure workloads.
3. OPA Gatekeeper constraints for privileged pods, unsafe capabilities, host networking, and image rules.
4. NetworkPolicy examples that show allowed and blocked traffic.
5. Trivy scans in CI and a short runtime detection runbook.

## What I want reviewers to see

The interesting part is not that a scanner runs. The interesting part is how the platform responds when a workload asks for something unsafe.

Examples:

```text
insecure workload -> admission denied -> finding explained -> safe workload example
```

That flow shows the control, the developer experience, and the remediation path.

## Why this matters

Kubernetes security is not one setting. It is identity, network boundaries, workload policy, image trust, runtime visibility, and documentation that engineers can actually use.

This project will show that full chain in a compact form.
