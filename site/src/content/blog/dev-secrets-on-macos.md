---
title: "Managing dev secrets on macOS without losing your mind (or your tokens)"
description: "Every cloud engineer ends up with a wallet full of API tokens. Here's the pattern I use to make them always-accessible to my shell while keeping them out of dotfiles, repos, and backups."
pubDate: 2026-05-02
tags: ["macos", "security", "secrets", "developer-experience"]
---

If your `~/.zshrc` has a `export GITLAB_TOKEN=...` line in it, this post is for you.

There's a common pattern — engineers want their shell to "just have" their tokens loaded, so they paste exports straight into `.zshrc` or `.bash_profile`. The token then ends up in dotfile backups, accidentally synced to GitHub when they "share their dotfiles," and visible to every process spawned by that shell.

You can do better with two small changes. Both keep the "always accessible" feel, neither requires you to type a password every morning.

## Option 1: a separate, locked-down secrets file

The minimal upgrade. Move secrets out of `.zshrc` and into a file with proper permissions, sourced from a shell file that loads in every session.

```bash
# 1. Create the secrets file (owner read/write only)
touch ~/.secrets
chmod 600 ~/.secrets

# 2. Put your exports inside
cat >> ~/.secrets <<'EOF'
export GITLAB_TOKEN="glpat-xxxxxxxxxxxxxxxxxxxx"
export GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
EOF

# 3. Source it from .zshenv — loads for every shell (interactive, login, script, GUI-spawned)
echo '[ -f ~/.secrets ] && source ~/.secrets' >> ~/.zshenv

# 4. Reload
exec zsh
echo $GITLAB_TOKEN  # should print the token
```

This already solves the worst problems. The file isn't world-readable, isn't in your dotfiles repo (you `.gitignore` it), and is sourced once per shell.

## Option 2: macOS Keychain (the version I actually use)

`~/.secrets` is still a plaintext file. If your laptop disk is unencrypted (it shouldn't be — turn on FileVault) or you're backing up your home directory unencrypted (you shouldn't be), the token sits in the open.

macOS Keychain solves this. The token is encrypted at rest with your login keychain.

```bash
# Store once
security add-generic-password \
  -a "$USER" \
  -s GITLAB_TOKEN \
  -w "glpat-xxxxxxxxxxxxxxxxxxxx" \
  -U                                # update if exists

# Fetch in shell — put this in ~/.zshenv instead of sourcing .secrets
export GITLAB_TOKEN="$(security find-generic-password -a "$USER" -s GITLAB_TOKEN -w 2>/dev/null)"
```

Same "always-accessible from any shell" experience, no plaintext file.

## Global gitignore so you can't commit by accident

Whichever option you pick, set this once and forget about it:

```bash
git config --global core.excludesfile ~/.gitignore_global
cat >> ~/.gitignore_global <<'EOF'
.env
.env.*
.secrets
*.secrets
*.pem
*.key
id_rsa
id_ed25519
EOF
```

Now every repo on your machine quietly refuses to track these files.

## Rules of thumb regardless of mechanism

* **Project-scoped tokens, not personal access tokens.** A GitLab project token (Project → Settings → Access Tokens) with `read_api` is exactly what most local tooling needs. Smaller blast radius when it leaks.
* **Rotate every 90 days.** Calendar reminder. Yes, really.
* **If you ever commit a token by mistake, rotate first, scrub history second.** Assume it's burned the moment it touches a public repo. `git rm` doesn't help once GitHub has indexed the commit.
* **Different tokens for different roles.** Don't reuse `GITLAB_TOKEN` for both your CI deploys and your local CLI. When something leaks, you want to revoke narrowly.

The whole point of "always accessible" is so the secure way is also the easy way. If your shell is fighting you, you'll quietly start pasting tokens places you shouldn't. Make it boring.
