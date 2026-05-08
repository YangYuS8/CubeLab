# ADR 0001: Initial Tech Stack

## Status

Accepted.

## Decision

CubeLab starts with `pnpm workspace`, `TypeScript`, `Vite + Vue`, `Node.js + Fastify`, `Zod`, `VitePress`, and `Vitest`.

## Rationale

- These tools keep initialization lightweight and reviewable.
- They provide clear module boundaries without forcing heavy application architecture too early.
- `lab-spec` needs both static types and runtime validation, which makes `Zod` a good fit.
- `sandbox-adapter` must remain a stable abstraction boundary for all CubeSandbox interactions.

## Explicit Non-Choices For Now

- No `Next.js` or `Nuxt`: unnecessary framework weight during initialization.
- No `NestJS`: too heavy for the current backend skeleton.
- No Kubernetes or microservices: premature operational complexity.
- No real LLM Agent runtime integration: architecture and safety requirements are not ready yet.
