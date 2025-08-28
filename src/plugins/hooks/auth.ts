import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

const authHooks: FastifyPluginAsync = async (app) => {
  app.addHook('preHandler', async (req, reply) => {
    // Authentication logic here
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token !== 'secret' || !token) {
      app.log.warn('Unauthorized access attempt');
      throw reply.unauthorized('Invalid or missing token');
    }
  });
};

export default fp(authHooks);
