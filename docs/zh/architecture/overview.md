# 架构概览

CubeLab 采用分层结构。

## 分层说明

- `apps/web`：面向用户的前端应用骨架
- `apps/api`：服务入口与编排层骨架
- `packages/lab-spec`：可移植的实验描述类型
- `packages/sandbox-adapter`：沙箱能力抽象层
- `packages/shared`：跨包共享的基础类型与工具

## 架构约束

- 应用层不得直接依赖 CubeSandbox 的实现细节。
- 实验能力必须通过 `lab-spec` 描述。
- 沙箱执行能力必须通过 `sandbox-adapter` 暴露。
