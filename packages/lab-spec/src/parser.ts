import { LabSpecSchema } from './schema';
import type { LabSpec } from './types';

export function parseLabSpec(input: unknown): LabSpec {
  return LabSpecSchema.parse(input);
}
