import { FastifyPluginAsync } from 'fastify';

const usersRoutes: FastifyPluginAsync = async (app) => {
  app.get(
    '/users/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'number' },
          },
        },
      },
    },
    async (req, reply) => {
      const { id } = req.params as { id: number };
      return { id, ok: true, name: 'John Doe' };
    }
  );
};

export default usersRoutes;
