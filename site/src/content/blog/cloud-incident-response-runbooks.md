---
title: "Project: Cloud Incident Response Runbooks"
description: "Public cloud incident runbooks for leaked secrets, exposed storage, suspicious IAM changes, and vulnerable container rollouts."
pubDate: 2026-06-18
tags: ["project", "incident-response", "cloud-security", "runbooks", "automation"]
---

This project is about operational maturity.

Tools matter, but during an incident the team needs clear ownership, containment steps, communication, evidence capture, and a recovery path.

## What the repo will include

1. Leaked secret response runbook.
2. Public storage exposure runbook.
3. Suspicious IAM change runbook.
4. Vulnerable container image rollout runbook.
5. Helper scripts with dry-run defaults.
6. Post-incident review template.

## Runbook structure

Each runbook will follow the same pattern:

```text
severity
owner
detection signal
first 15 minutes
containment
eradication
recovery
customer or stakeholder comms
post-incident actions
```

## Why this matters

I want this repo to show that I do not only build controls. I also think about what happens when a control fails, how teams respond, and how the platform improves after the incident.
