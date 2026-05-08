# Architecture Overview

CubeLab uses a layered structure.

## Initial Tech Stack

- Monorepo: `pnpm workspace`
- Frontend: `Vite + Vue`
- Backend: `Node.js + TypeScript + Fastify`
- Validation: `Zod`
- Documentation: `VitePress` with English and Simplified Chinese locales
- Testing: `Vitest` first
- Deferred: `Playwright`, `PostgreSQL + Drizzle`, `Redis/BullMQ`

## Layers

- `apps/web`: user-facing application shell
- `apps/api`: Fastify service skeleton
- `packages/lab-spec`: portable lab description types and runtime schemas
- `packages/sandbox-adapter`: sandbox capability abstraction
- `packages/shared`: shared primitives used across packages

## Architectural Constraints

- App code must not directly depend on CubeSandbox implementation details.
- Lab behavior must be expressed through `lab-spec` TypeScript types and Zod schemas.
- Sandbox execution must be reached through `sandbox-adapter`.
- Sandbox terminology must stay sandbox-neutral and must not use Docker-oriented terms such as `container` or `image`.
- All CubeSandbox interactions must go through `sandbox-adapter`.

## Workflow Constraint

The initialization correction stage ends with this repository state.
After this point, non-trivial development must return to the Issue -> branch -> PR -> human review workflow.

High-risk changes must still be labeled explicitly when they affect security, permissions, networking, command execution, mounts, or agent automation.
