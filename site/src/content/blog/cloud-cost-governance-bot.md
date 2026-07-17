---
title: "Project: Cloud Cost Governance Bot"
description: "A Python automation project that turns cloud inventory exports into cost, tagging, ownership, and governance findings."
pubDate: 2026-06-19
tags: ["project", "python", "finops", "governance", "automation"]
---

This project connects platform engineering to business outcomes.

The idea is simple: take anonymised cloud inventory exports, apply governance rules, and produce a report that teams can act on.

## What the repo will include

1. Sample Azure and AWS export files with fake data.
2. YAML rules for required tags, owner fields, budget drift, idle resources, and oversized resources.
3. A Python report generator.
4. A dry-run mode for GitHub issue creation.
5. Unit tests around the rules.

## Example checks

```yaml
required_tags:
  - owner
  - cost_center
  - environment

idle_resource_days: 14
monthly_budget_threshold_percent: 80
```

## Why this matters

Senior DevOps work is not only pipelines and clusters. It is also ownership, cost visibility, and making drift visible before it becomes a finance or audit problem.

This project will show that I can build automation that helps both engineering teams and leadership.
