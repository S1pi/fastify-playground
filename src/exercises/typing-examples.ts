import { FastifyPluginAsync } from 'fastify';

// Expand Fastify types with custom properties
declare module 'fastify' {
  interface FastifyRequest {
    startTime?: number;
  }
}

const requestTimingExample: FastifyPluginAsync = async (app) => {
  // On request start
  app.addHook('onRequest', async (req) => {
    // Now can be used because we extended the FastifyRequest interface
    // Otherwise TypeScript would complain "Property 'startTime' does not exist on type 'FastifyRequest'."
    req.startTime = Date.now();
  });

  // When request ends
  app.addHook('onResponse', async (req, _reply) => {
    const duration = req.startTime ? Date.now() - req.startTime : 0;
    app.log.info(`Request ${req.method} ${req.url} took ${duration}ms`);
    // const duration = Date.now() - (req.startTime || 0);
    // reply.header('X-Response-Time', `${duration}ms`);
  });

  app.get('/exercise/timing', async (req, _reply) => {
    return { msg: 'Hook is working', startTime: req.startTime };
  });
};

export default requestTimingExample;
