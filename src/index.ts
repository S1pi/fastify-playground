import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';

import healthRoutes from './routes/health';
import echoRoutes from './routes/echo';

const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
      },
    },
  },
});

app.register(cors, { origin: true });
app.register(sensible);

await app.register(healthRoutes, { prefix: '/api' });
await app.register(echoRoutes, { prefix: '/api' });

const port = Number(process.env.PORT ?? 3000);

try {
  await app.listen({ port, host: '0.0.0.0' });
  app.log.info(`Server listening on port ${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
