# Agent Workflow

CubeLab accepts AI-assisted contributions, but every agent-authored PR must be reviewed by a human maintainer.

## Required Workflow

1. Start from an Issue.
2. Confirm scope, forbidden areas, and acceptance criteria.
3. Make the smallest reviewable change possible.
4. Mark high-risk changes explicitly when they touch security, permissions, networking, command execution, mounts, or agent automation.
5. Explain design tradeoffs in the PR.
6. After initialization, use the full Issue -> branch -> PR -> human review flow for every non-trivial change.

## Current Stack Guardrails

- Use `pnpm workspace` for repository management.
- Use `Fastify` for the backend skeleton. Do not switch to NestJS, Express, or another backend framework without an architecture Issue.
- Use `Zod` alongside TypeScript for `lab-spec` runtime validation.
- Keep CubeSandbox integration behind `sandbox-adapter`.
- Keep lab semantics inside `lab-spec`.

## Non-Negotiable Rules

- No large change without an Issue.
- No one-shot implementation of multiple modules.
- No direct coupling to CubeSandbox outside `sandbox-adapter`.
- No hidden lab semantics outside `lab-spec`.
- No sandbox abstraction terms that imply Docker-specific runtime semantics.
