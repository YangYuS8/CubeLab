# CubeLab

CubeLab is an upper-layer education ecosystem built on top of `TencentCloud/CubeSandbox`.
It is designed for secure, isolated, "one learner, one sandbox" teaching workflows across Linux, Shell, DevOps, and AI Agent practice scenarios.

`CubeSandbox` provides the fast and isolated MicroVM runtime.
`CubeLab` focuses on the learning-facing capabilities on top of that runtime, including course content, lab definitions, task orchestration, automated checks, AI teaching assistance, learner records, and instructor operations.

## Why CubeLab Is Not Just a Web Terminal

CubeLab is not intended to be a thin browser shell wrapper.
The project is designed around structured labs, acceptance criteria, reusable lab specifications, auditable teaching workflows, and safe automation boundaries for both humans and AI agents.

## Core Modules

- `apps/web`: learner and instructor web application shell
- `apps/api`: TypeScript API service skeleton
- `packages/sandbox-adapter`: abstraction layer for sandbox lifecycle and execution capabilities
- `packages/lab-spec`: lab DSL and schema draft types
- `packages/shared`: shared types and utilities
- `docs`: VitePress documentation site

## Current Status

CubeLab is currently `early-stage` and `experimental`.
This repository is initialized for long-term open source collaboration, with special attention to small-step reviews and AI agent workflows.

## Roadmap

1. Phase 1: Linux / Shell lab platform
2. Phase 2: DevOps troubleshooting labs
3. Phase 3: AI teaching assistant and automated grading
4. Phase 4: Agent-safe execution teaching scenarios

## Human + Agent Collaboration

This project welcomes collaboration from both human contributors and AI agents.
All agent-generated pull requests must still be reviewed and approved by a human maintainer before merging.

## Initial Stack Choice

- Package manager: `pnpm`
- Language: `TypeScript`
- Frontend: `Vite + Vue`
- Docs: `VitePress`
- Backend: lightweight TypeScript service skeleton
- Testing: `vitest` placeholders
- Lint / format: `eslint` and `prettier` placeholders

Vue is chosen for the frontend shell because it works naturally with Vite, keeps the initial project weight low, has a strong documentation ecosystem, and is well suited for a future documentation-heavy education platform without forcing a heavy full-stack framework too early.

## Getting Started

```bash
pnpm install
pnpm typecheck
pnpm --filter @cubelab/docs docs:dev
```

## Contributing

Read `AGENTS.md` before making major changes, especially when contributing through AI agents or automation-assisted workflows.
