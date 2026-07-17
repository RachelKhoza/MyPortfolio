---
title: "Project: Terraform Azure Landing Zone Lite"
description: "A public Terraform project plan for a secure Azure landing zone with policy, diagnostics, tagging, budget controls, and GitHub OIDC."
pubDate: 2026-06-22
tags: ["project", "terraform", "azure", "policy-as-code", "platform-engineering"]
---

This is the project I want recruiters to open when they ask whether I can design a cloud foundation, not just deploy individual resources.

The goal is a small Azure landing zone that is realistic enough to show engineering judgement, but safe enough to run as a public portfolio project without exposing secrets or creating unnecessary cost.

## What the repo will include

1. Reusable Terraform modules for resource groups, networking, diagnostics, policy assignments, budgets, and standard tags.
2. Example environments for `dev`, `test`, and `prod`.
3. GitHub Actions checks for `terraform fmt`, `terraform validate`, `tflint`, and Checkov.
4. A short security decision record for each baseline control.
5. GitHub OIDC documentation so CI does not rely on static Azure credentials.

## Controls I want visible

- Mandatory tags for ownership and cost allocation.
- Diagnostic settings enabled by default.
- Policy assignments that block risky defaults.
- Budget alerts so cost governance is part of the platform.
- Least-privilege deployment identity through federated credentials.

## Why this matters

Landing zones are where DevSecOps either becomes easy or becomes theatre. If the platform gives teams secure defaults, teams ship faster. If every project starts from a blank subscription, security becomes a review meeting instead of an engineering control.

The public version will stay deliberately small, but the pattern is the same one I use in regulated environments: make the compliant path the easiest path.
