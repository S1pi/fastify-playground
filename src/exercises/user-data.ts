import { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user?: { id: number; name: string };
  }
}

const userExample: FastifyPluginAsync = async (app) => {
  // Auth simulation (Normally would need a token)
  app.addHook('preHandler', async (req) => {
    req.user = { id: 1, name: 'John Doe' }; // Hard coded user
  });

  app.get('/exercise/user', async (req) => {
    return { msg: 'User data retrieved', user: req.user };
  });
};

export default userExample;
