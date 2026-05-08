# ADR 0001：初始技术栈决策

## 状态

Accepted。

## 决策

CubeLab 当前采用 `pnpm workspace`、`TypeScript`、`Vite + Vue`、`Node.js + Fastify`、`Zod`、`VitePress` 和 `Vitest`。

## 原因

- 这些工具足够轻，适合初始化阶段保持仓库可审查、可演进。
- 它们能先建立清晰的模块边界，而不是过早引入沉重的应用架构。
- `lab-spec` 同时需要静态类型和运行时校验，因此 `Zod` 很合适。
- 所有 CubeSandbox 交互都必须通过 `sandbox-adapter`，这个边界需要尽早稳定。

## 当前明确不采用

- 不采用 `Next.js` 或 `Nuxt`：初始化阶段没有必要引入更重的框架。
- 不采用 `NestJS`：对当前后端骨架来说过重。
- 不采用 Kubernetes 或微服务：运维复杂度过早。
- 不采用真实 LLM Agent 运行时集成：当前安全边界与架构约束都还未成熟。
