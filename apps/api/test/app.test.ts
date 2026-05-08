import { describe, expect, it } from 'vitest';

import { buildApp } from '../src/index';

describe('buildApp', () => {
  it('returns a health payload', async () => {
    const app = buildApp();

    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      name: 'CubeLab API',
      status: 'ok',
    });

    await app.close();
  });
});
