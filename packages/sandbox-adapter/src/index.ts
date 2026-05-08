export interface SandboxResourceLimit {
  cpuCores?: number;
  memoryMb?: number;
  diskMb?: number;
}

export interface SandboxPortExposure {
  containerPort: number;
  protocol?: 'tcp' | 'udp';
}

export interface SandboxHandle {
  sandboxId: string;
}

export interface SandboxFilePayload {
  path: string;
  content: string | Uint8Array;
}

export interface SandboxCommandRequest {
  command: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
  timeoutMs?: number;
}

export interface SandboxCommandResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

export interface SandboxAdapter {
  createSandbox(input?: { image?: string; resourceLimit?: SandboxResourceLimit }): Promise<SandboxHandle>;
  execCommand(handle: SandboxHandle, request: SandboxCommandRequest): Promise<SandboxCommandResult>;
  uploadFile(handle: SandboxHandle, file: SandboxFilePayload): Promise<void>;
  downloadFile(handle: SandboxHandle, path: string): Promise<Uint8Array>;
  exposePort(handle: SandboxHandle, exposure: SandboxPortExposure): Promise<{ publicUrl?: string }>;
  pauseSandbox(handle: SandboxHandle): Promise<void>;
  resumeSandbox(handle: SandboxHandle): Promise<void>;
  destroySandbox(handle: SandboxHandle): Promise<void>;
}
