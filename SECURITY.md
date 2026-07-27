# Security Policy

This is a private, proprietary repository. If you discover a security
vulnerability in this codebase or its deployed site, please report it
privately rather than opening a public issue.

## Reporting a Vulnerability

Email **hello@nocturne.com** with:

- A description of the vulnerability and its potential impact
- Steps to reproduce, or a proof of concept
- Any relevant logs, screenshots, or affected URLs

You should expect an initial response within 5 business days. Please do
not disclose the issue publicly until it has been resolved.

## Supported Versions

Only the code on the `main` branch is actively maintained and receives
security fixes.

## Dependency Security

Dependency vulnerabilities are monitored via GitHub Dependabot (see
`.github/dependabot.yml`) and `npm audit`. Run `npm audit` locally before
adding new dependencies.
