# Agent Workflow

CubeLab accepts AI-assisted contributions, but every agent-authored PR must be reviewed by a human maintainer.

## Required Workflow

1. Start from an Issue.
2. Confirm scope, forbidden areas, and acceptance criteria.
3. Make the smallest reviewable change possible.
4. Mark high-risk changes explicitly when they touch security, permissions, networking, command execution, mounts, or agent automation.
5. Explain design tradeoffs in the PR.

## Non-Negotiable Rules

- No large change without an Issue.
- No one-shot implementation of multiple modules.
- No direct coupling to CubeSandbox outside `sandbox-adapter`.
- No hidden lab semantics outside `lab-spec`.
