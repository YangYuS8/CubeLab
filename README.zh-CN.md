# CubeLab

CubeLab 是一个基于 `TencentCloud/CubeSandbox` 的教育场景上层生态项目，面向 Linux、Shell、DevOps、AI Agent 等实验教学场景，提供“一人一沙箱”的安全实验平台能力。

`CubeSandbox` 负责极速、安全、隔离的 MicroVM 沙箱运行时。
`CubeLab` 负责其上的课程、实验、任务编排、自动验收、AI 助教、学习记录与教师侧管理等上层能力。

## 为什么它不是一个简单的 Web Terminal

CubeLab 的目标不是把终端放进浏览器。
它强调的是结构化实验、可复用实验规范、自动验收、教学过程留痕、可审计的 Agent 自动化边界，以及适合教学场景的安全抽象。

## 核心模块

- `apps/web`：学员端与教师端 Web 应用骨架
- `apps/api`：TypeScript API 服务骨架
- `packages/sandbox-adapter`：沙箱生命周期与执行能力抽象层
- `packages/lab-spec`：实验 DSL / schema 草案
- `packages/shared`：共享类型与工具
- `docs`：VitePress 文档站点

## 当前状态

当前仓库处于 `early-stage` / `experimental` 阶段。
本次初始化重点是建立长期维护所需的工程结构、文档结构和 Agent 协作规则，而不是实现完整业务。

## 路线图

1. Phase 1：Linux / Shell 实验平台
2. Phase 2：DevOps 故障排查实验
3. Phase 3：AI 助教与自动验收
4. Phase 4：Agent 安全执行教学

## 人类与 Agent 协作

本项目欢迎人类开发者与 AI agents 共同协作。
但所有 Agent 生成的 PR 都必须经过人工审核后才能合并。

## 初始技术选型

- 包管理器：`pnpm`
- 语言：`TypeScript`
- 前端：`Vite + Vue`
- 文档：`VitePress`
- 后端：轻量 TypeScript 服务骨架
- 测试：预留 `vitest`
- 规范：预留 `eslint` / `prettier`

前端先选择 Vue，原因是它与 Vite 配合自然、初始依赖轻、文档生态成熟，适合教学平台这类需要长期维护文档与交互界面的项目，同时避免过早引入更重的全栈框架。

## 快速开始

```bash
pnpm install
pnpm typecheck
pnpm --filter @cubelab/docs docs:dev
```

## 贡献说明

在进行较大改动前，请先阅读 `AGENTS.md`，尤其是通过 AI agents 或自动化方式参与贡献时。
