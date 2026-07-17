---
title: "A secure-by-default CI/CD pipeline template (and why bolting scanners on doesn't work)"
description: "Why DevSecOps fails when security is layered on top of an existing pipeline, and the shape of a template I've now rolled out three times — Checkov, Trivy, Gitleaks, Syft, OPA — that engineers actually adopt."
pubDate: 2026-04-15
tags: ["devsecops", "ci-cd", "checkov", "trivy", "gitleaks", "sbom"]
---

Every DevSecOps engagement I've inherited has had the same story. There was a pipeline. Someone bolted SAST onto it. Then DAST. Then secret scanning. Each tool produced its own report in its own format, gated nothing, and the team learned to ignore the noise.

The mistake is treating the security stage as a layer. It isn't. It's a *contract* — the pipeline either tells you what it just enforced, or it didn't enforce anything.

## What "secure-by-default" actually means

A pipeline template is secure-by-default when:

1. **The default mode is "fail on critical findings."** Engineers can override the default with a documented escape hatch, but the escape hatch is logged and reviewed.
2. **Every scan emits a structured artefact.** SARIF or JSON, never a plain-text report. Means the artefacts can be aggregated, queried, and trended.
3. **The pipeline talks back to the PR.** Findings appear as annotations on the diff, not as a wall of red in the run log.
4. **Secrets, SBOMs, signatures and policies are first-class outputs.** Treat them the same as the build artefact — versioned, attested, stored.

If a template doesn't do those four things, it's just expensive theatre.

## The stages I include

For a typical container-based service, the template runs these gates in order. The order matters — cheap, fast checks first, expensive ones last:

```text
1.  pre-commit-cached lint / format
2.  Gitleaks         → secret detection on the diff
3.  Checkov + tfsec  → IaC security on Terraform / K8s manifests
4.  SAST (Semgrep)   → application code
5.  Build container
6.  Trivy            → image vulnerability scan (block on critical)
7.  Syft             → SBOM generation
8.  Cosign           → image signing
9.  Conftest / OPA   → policy gate on the manifest
10. DAST (ZAP)       → only on the deploy-to-staging step
```

Stages 6–8 are what most teams skip and is where the supply-chain attacks actually land.

## The escape hatch

Engineers will always need to ship something that fails a gate. Pretending otherwise produces shadow pipelines. The template supports an annotated bypass:

```yaml
security:
  bypass:
    finding_id: CKV_AWS_24    # specific finding only
    reason: "Bastion is in an isolated VPC; SSH 0.0.0.0/0 is acceptable"
    expires: 2026-07-01       # required
    approver: "@security-lead"
```

The bypass is recorded as a structured artefact, surfaced in the security dashboard, and expires. No "ignore forever" toggles.

## What I track to know it's working

* Mean time to detect a new critical CVE in production (target: < 24h).
* % of PRs blocked by security gates vs. % bypassed.
* Bypass expiry compliance — how many bypasses are renewed vs. fixed.
* SBOM coverage of the production image registry.

When I last rolled this out, the bypass-vs-block ratio settled around 1:12 within a quarter. That's the honest number for "engineers don't hate it."

---

If you want the actual template, [reach out](mailto:mrsrachelkhoza@gmail.com) — I've open-sourced an anonymised version and am happy to share.
