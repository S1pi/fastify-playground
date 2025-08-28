import { FastifyPluginAsync } from 'fastify';

const failRoutes: FastifyPluginAsync = async (app) => {
  app.get('/fail-with-reply', async (req, reply) => {
    // Use in simple replies
    reply.badRequest('This is a bad request error');
  });

  app.get('/fail-with-throw', async (req, reply) => {
    // Use if you want to throw an error
    // So you can handle or catch it in try/catch blocks
    throw app.httpErrors.badRequest('This is a bad request error');
  });
};

export default failRoutes;
