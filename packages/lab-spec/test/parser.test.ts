import { describe, expect, it } from 'vitest';

import { parseLabSpec } from '../src/parser';

describe('parseLabSpec', () => {
  it('parses a valid lab spec with discriminated checks', () => {
    const spec = parseLabSpec({
      id: 'linux-basics',
      title: 'Linux Basics',
      version: '0.1.0',
      summary: 'A minimal lab spec for initialization.',
      tasks: [
        {
          id: 'task-1',
          title: 'Inspect files',
          description: 'Run a command and inspect a file.',
          checks: [
            {
              id: 'check-command',
              type: 'command',
              description: 'ls should succeed',
              command: 'ls',
              expectedExitCode: 0,
            },
            {
              id: 'check-file',
              type: 'file',
              description: 'README should exist',
              path: '/workspace/README.md',
              shouldExist: true,
            },
            {
              id: 'check-http',
              type: 'http',
              description: 'health endpoint should return 200',
              url: 'http://127.0.0.1:3000/health',
              expectedStatus: 200,
            },
            {
              id: 'check-custom',
              type: 'custom',
              description: 'reserved for future extension',
              extensionKey: 'future.check',
            },
          ],
        },
      ],
    });

    expect(spec.tasks[0]?.checks[0]?.type).toBe('command');
    expect(spec.tasks[0]?.checks[1]?.type).toBe('file');
    expect(spec.tasks[0]?.checks[2]?.type).toBe('http');
    expect(spec.tasks[0]?.checks[3]?.type).toBe('custom');
  });

  it('rejects an invalid command check', () => {
    expect(() =>
      parseLabSpec({
        id: 'broken-lab',
        title: 'Broken Lab',
        version: '0.1.0',
        summary: 'Missing command field.',
        tasks: [
          {
            id: 'task-1',
            title: 'Broken task',
            description: 'This should fail validation.',
            checks: [
              {
                id: 'check-command',
                type: 'command',
                description: 'missing command',
              },
            ],
          },
        ],
      }),
    ).toThrow();
  });
});
