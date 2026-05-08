import Fastify from 'fastify';

export function buildApp() {
  const app = Fastify({
    logger: false,
  });

  app.get('/health', async () => {
    return {
      name: 'CubeLab API',
      status: 'ok',
    };
  });

  app.get('/', async () => {
    return {
      name: 'CubeLab API',
      status: 'ok',
    };
  });

  return app;
}

async function start() {
  const app = buildApp();

  try {
    await app.listen({
      host: '0.0.0.0',
      port: 3000,
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== 'test') {
  void start();
}
