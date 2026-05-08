# Architecture Overview

CubeLab uses a layered structure.

## Layers

- `apps/web`: user-facing application shell
- `apps/api`: service entrypoint and orchestration shell
- `packages/lab-spec`: portable lab description types
- `packages/sandbox-adapter`: sandbox capability abstraction
- `packages/shared`: shared primitives used across packages

## Architectural Constraints

- App code must not directly depend on CubeSandbox implementation details.
- Lab behavior must be expressed through `lab-spec`.
- Sandbox execution must be reached through `sandbox-adapter`.
