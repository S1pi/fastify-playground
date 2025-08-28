import { FastifyPluginAsync } from 'fastify';
import { sumSchema } from './schemas/math';

const mathRoutes: FastifyPluginAsync = async (app) => {
  // Example usage of schema in different file
  app.post('/sum', sumSchema, async (req) => {
    const { a, b } = req.body as { a: number; b: number };
    const sum = a + b;
    return { sum };
  });
};

export default mathRoutes;
