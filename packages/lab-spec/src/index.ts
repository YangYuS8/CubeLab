export interface LabHint {
  id: string;
  title: string;
  content: string;
  unlockCondition?: string;
}

export interface LabCheck {
  id: string;
  type: 'command' | 'file' | 'http' | 'custom';
  description: string;
  expectedOutcome?: string;
}

export interface LabTask {
  id: string;
  title: string;
  description: string;
  checks: LabCheck[];
  hints?: LabHint[];
}

export interface LabResourceLimit {
  cpuCores?: number;
  memoryMb?: number;
  diskMb?: number;
  maxProcesses?: number;
}

export interface LabNetworkPolicy {
  mode: 'isolated' | 'restricted' | 'open';
  allowedHosts?: string[];
  exposedPorts?: number[];
}

export interface LabSpec {
  id: string;
  title: string;
  version: string;
  summary: string;
  tasks: LabTask[];
  resourceLimit?: LabResourceLimit;
  networkPolicy?: LabNetworkPolicy;
}
