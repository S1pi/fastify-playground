import { FastifyPluginAsync } from 'fastify';

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });
};

export default healthRoutes;
