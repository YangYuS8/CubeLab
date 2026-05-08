import type { z } from 'zod';

import type {
  CommandLabCheckSchema,
  CustomLabCheckSchema,
  FileLabCheckSchema,
  HttpLabCheckSchema,
  LabCheckSchema,
  LabHintSchema,
  LabNetworkPolicySchema,
  LabResourceLimitSchema,
  LabSpecSchema,
  LabTaskSchema,
} from './schema';

export type LabHint = z.infer<typeof LabHintSchema>;
export type CommandLabCheck = z.infer<typeof CommandLabCheckSchema>;
export type FileLabCheck = z.infer<typeof FileLabCheckSchema>;
export type HttpLabCheck = z.infer<typeof HttpLabCheckSchema>;
export type CustomLabCheck = z.infer<typeof CustomLabCheckSchema>;
export type LabCheck = z.infer<typeof LabCheckSchema>;
export type LabTask = z.infer<typeof LabTaskSchema>;
export type LabResourceLimit = z.infer<typeof LabResourceLimitSchema>;
export type LabNetworkPolicy = z.infer<typeof LabNetworkPolicySchema>;
export type LabSpec = z.infer<typeof LabSpecSchema>;
