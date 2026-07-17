---
title: "Project: SonarQube + Trivy DevSecOps Lab"
description: "A hands-on DevSecOps lab with Jenkins, SonarQube, Docker, Trivy, quality gates, and remediation notes."
pubDate: 2026-06-20
tags: ["project", "jenkins", "sonarqube", "trivy", "ci-cd"]
---

This is the most interview-friendly lab because it is easy to demonstrate: build an app, run quality checks, scan the image, fail on important findings, then document the fix.

## What the repo will include

1. `docker-compose.yml` for Jenkins and SonarQube.
2. A small Java or Node application.
3. A `Jenkinsfile` with build, unit test, SonarQube, Docker build, and Trivy stages.
4. Screenshots of a passing pipeline and a failing security gate.
5. A before-and-after remediation section in the README.

## Pipeline shape

```text
checkout
  -> install dependencies
  -> unit tests
  -> SonarQube analysis
  -> quality gate
  -> Docker build
  -> Trivy image scan
  -> publish reports
```

## Why this matters

Many teams can install tools. Fewer teams can explain what the tool found, decide whether it should block a release, and help developers fix it.

This lab will show that practical layer: clear gates, useful output, and remediation notes.
