# 架构概览

CubeLab 采用分层结构。

## 初始技术栈

- Monorepo：`pnpm workspace`
- 前端：`Vite + Vue`
- 后端：`Node.js + TypeScript + Fastify`
- 校验：`Zod`
- 文档：支持英文与简体中文的 `VitePress`
- 测试：优先 `Vitest`
- 暂缓引入：`Playwright`、`PostgreSQL + Drizzle`、`Redis/BullMQ`

## 分层说明

- `apps/web`：面向用户的前端应用骨架
- `apps/api`：Fastify 服务骨架
- `packages/lab-spec`：可移植的实验描述类型与运行时 schema
- `packages/sandbox-adapter`：沙箱能力抽象层
- `packages/shared`：跨包共享的基础类型与工具

## 架构约束

- 应用层不得直接依赖 CubeSandbox 的实现细节。
- 实验能力必须通过 `lab-spec` 的 TypeScript 类型与 Zod schema 描述。
- 沙箱执行能力必须通过 `sandbox-adapter` 暴露。
- `sandbox-adapter` 的术语必须保持沙箱中立，不使用 `container`、`image` 这类易绑定 Docker 的概念。
- 所有 CubeSandbox 交互都必须通过 `sandbox-adapter` 进行。

## 工作流约束

初始化修正阶段到此结束。
从这之后，所有非平凡开发都必须回到 Issue -> branch -> PR -> human review 工作流。

凡是涉及安全、权限、网络、命令执行、挂载或 Agent 自动操作的修改，仍然必须标记为 `high-risk`。
