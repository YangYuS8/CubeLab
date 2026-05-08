# CubeLab Agent Collaboration Rules

## Project Vision

CubeLab aims to become a secure, reviewable, and extensible education platform built on top of `TencentCloud/CubeSandbox`.
The project separates sandbox runtime concerns from teaching concerns.
`CubeSandbox` is the underlying isolated execution substrate.
`CubeLab` defines the education-facing abstractions, workflows, and collaboration rules needed for long-term open source maintenance.

## Agent Working Principles

1. Work from Issues first. Every non-trivial change must be traceable to an Issue.
2. Prefer the smallest correct change that can be reviewed independently.
3. Keep modules decoupled. Changes should strengthen boundaries, not blur them.
4. Explain design tradeoffs clearly in the PR description when a task is finished.
5. Favor explicit abstractions over hidden coupling or one-off shortcuts.
6. Treat security-sensitive changes with elevated caution and documentation.

## Forbidden Actions

1. Do not make large-scale changes without an Issue.
2. Do not implement multiple major modules in a single PR.
3. Do not bypass `packages/sandbox-adapter` and couple application code directly to CubeSandbox.
4. Do not hardcode current CubeSandbox implementation details, transport assumptions, CLI details, or vendor-specific runtime behavior into upper-layer packages.
5. Do not define lab behavior outside `packages/lab-spec` when it belongs to reusable lab specification semantics.
6. Do not introduce security-sensitive behavior without explicitly labeling the change as `high-risk` when it touches permissions, networking, command execution, file mounting, or agent automation.
7. Do not merge agent-authored work without human review.

## Architecture Rules

1. All lab capabilities must be described through `lab-spec` abstractions.
2. All sandbox capabilities must be exposed through `sandbox-adapter` abstractions.
3. App-layer code must depend on abstractions, not on a specific CubeSandbox runtime detail.
4. Shared utilities belong in `packages/shared` only when they are genuinely cross-package.

## Code Style

1. Use TypeScript with strict typing.
2. Prefer simple interfaces and small modules over speculative abstractions.
3. Avoid heavy dependencies unless there is a clear long-term need.
4. Keep placeholder code minimal during initialization.
5. Add comments only where they clarify intent that is not obvious from the code.

## Documentation Style

1. Keep docs concise, concrete, and maintainable.
2. Update both English and Chinese docs when project-level behavior or contributor workflow changes.
3. State assumptions explicitly when a capability is only planned, not implemented.
4. Avoid presenting roadmap items as completed features.

## Branch And PR Rules

1. One Issue, one focused branch, one reviewable concern.
2. Agent PRs must be small-step, reviewable, and rollback-friendly.
3. PR descriptions must include design tradeoffs, risk notes, and validation steps.
4. High-risk changes must be called out explicitly in the PR title or body.
5. Do not bundle unrelated refactors into feature or bug-fix PRs.

## Issue-Driven Workflow

1. Start from an Issue that defines background, scope, and acceptance criteria.
2. Confirm allowed and forbidden modification ranges before implementation.
3. Implement only the scoped change.
4. Verify the result and document the outcome in the PR.
5. Ask for human confirmation when the Issue or PR template requires it.

## Scope Control Rules

1. No major change without an Issue.
2. No single PR that attempts to implement multiple modules at once.
3. No direct runtime coupling to CubeSandbox outside `sandbox-adapter`.
4. No lab execution semantics that bypass `lab-spec`.

## High-Risk Change Policy

Any change touching the following must be marked `high-risk`:

1. Security boundaries
2. Authorization or permission logic
3. Network exposure or connectivity
4. Command execution behavior
5. File mount, upload, or download behavior
6. Agent-triggered automatic operations

## PR Completion Requirement

When an Agent finishes a task, the PR must explain:

1. Why this design was chosen
2. What alternatives were considered or deferred
3. What risks remain
4. What human reviewers should inspect carefully
