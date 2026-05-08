# Agent 协作流程

CubeLab 欢迎 AI 辅助贡献，但所有 Agent 生成的 PR 都必须经过人工审核。

## 必须遵循的流程

1. 从 Issue 开始。
2. 先确认范围、禁改区域与验收标准。
3. 以最小可审查改动完成任务。
4. 只要涉及安全、权限、网络、命令执行、挂载或 Agent 自动操作，就必须明确标记为 high-risk。
5. 在 PR 中解释设计取舍。
6. 初始化修正完成后，所有非平凡改动都必须走完整的 Issue -> branch -> PR -> human review 流程。

## 当前技术栈护栏

- 仓库管理统一使用 `pnpm workspace`。
- 后端骨架统一使用 `Fastify`。没有架构 Issue，不允许擅自切换到 NestJS、Express 或其他后端框架。
- `lab-spec` 必须同时提供 TypeScript 类型和 Zod 运行时校验。
- CubeSandbox 集成必须收敛到 `sandbox-adapter`。
- 实验语义必须收敛到 `lab-spec`。

## 不可绕过的规则

- 没有 Issue，不允许直接做大改。
- 不允许一次性实现多个模块。
- 不允许在 `sandbox-adapter` 之外直接耦合 CubeSandbox。
- 不允许在 `lab-spec` 之外隐藏实验语义。
- 不允许在沙箱抽象里使用带有 Docker 倾向的术语。
