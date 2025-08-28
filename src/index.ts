import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';

import healthRoutes from './routes/health';
import echoRoutes from './routes/echo';
import usersRoutes from './routes/users';
import failRoutes from './routes/fail';
import requestTimingExample from './exercises/typing-examples';
import userExample from './exercises/user-data';
import replyExample from './exercises/reply-example';
import authHooks from './plugins/hooks/auth';
import privateRoutes from './routes/private';
import mathRoutes from './routes/math';

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

// List of routes, in the order they should be registered
const routes = [
  healthRoutes,
  echoRoutes,
  usersRoutes,
  failRoutes,
  requestTimingExample,
  userExample,
  replyExample,
  mathRoutes,
];

// app.register(authHooks, { prefix: '/api/private' });
// app.register(privateRoutes, { prefix: '/api/private' });

// Register routes for /api
for await (const route of routes) {
  app.log.info(`Registering route: ${route.name}`);
  await app.register(route, { prefix: '/api' });
}

// Register private routes with authentication hooks
// If authHooks is used with fp() this is needed:
await app.register(
  async (priv) => {
    await priv.register(authHooks);
    await priv.register(privateRoutes);
  },
  { prefix: '/api/private' }
);

const port = Number(process.env.PORT ?? 3000);

try {
  await app.listen({ port, host: '0.0.0.0' });
  app.log.info(`Server listening on port ${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
