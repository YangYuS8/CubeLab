import { z } from 'zod';

export const LabHintSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  unlockCondition: z.string().min(1).optional(),
});

export const CommandLabCheckSchema = z.object({
  id: z.string().min(1),
  type: z.literal('command'),
  description: z.string().min(1),
  command: z.string().min(1),
  args: z.array(z.string()).optional(),
  cwd: z.string().min(1).optional(),
  timeoutMs: z.number().int().positive().optional(),
  expectedExitCode: z.number().int().optional(),
  stdoutContains: z.array(z.string().min(1)).optional(),
  stderrContains: z.array(z.string().min(1)).optional(),
  stdoutNotContains: z.array(z.string().min(1)).optional(),
  stderrNotContains: z.array(z.string().min(1)).optional(),
});

export const FileLabCheckSchema = z.object({
  id: z.string().min(1),
  type: z.literal('file'),
  description: z.string().min(1),
  path: z.string().min(1),
  shouldExist: z.boolean().optional(),
  contentContains: z.array(z.string().min(1)).optional(),
  mode: z.string().min(1).optional(),
});

export const HttpLabCheckSchema = z.object({
  id: z.string().min(1),
  type: z.literal('http'),
  description: z.string().min(1),
  url: z.string().url(),
  method: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']).optional(),
  expectedStatus: z.number().int().min(100).max(599).optional(),
  responseContains: z.array(z.string().min(1)).optional(),
});

export const CustomLabCheckSchema = z.object({
  id: z.string().min(1),
  type: z.literal('custom'),
  description: z.string().min(1),
  extensionKey: z.string().min(1),
  config: z.record(z.string(), z.unknown()).optional(),
});

export const LabCheckSchema = z.discriminatedUnion('type', [
  CommandLabCheckSchema,
  FileLabCheckSchema,
  HttpLabCheckSchema,
  CustomLabCheckSchema,
]);

export const LabTaskSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  checks: z.array(LabCheckSchema).min(1),
  hints: z.array(LabHintSchema).optional(),
});

export const LabResourceLimitSchema = z.object({
  cpuCores: z.number().positive().optional(),
  memoryMb: z.number().int().positive().optional(),
  diskMb: z.number().int().positive().optional(),
  maxProcesses: z.number().int().positive().optional(),
});

export const LabNetworkPolicySchema = z.object({
  mode: z.enum(['isolated', 'restricted', 'open']),
  allowedHosts: z.array(z.string().min(1)).optional(),
  exposedPorts: z.array(z.number().int().min(1).max(65535)).optional(),
});

export const LabSpecSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  version: z.string().min(1),
  summary: z.string().min(1),
  tasks: z.array(LabTaskSchema).min(1),
  resourceLimit: LabResourceLimitSchema.optional(),
  networkPolicy: LabNetworkPolicySchema.optional(),
});
