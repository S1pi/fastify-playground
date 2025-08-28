import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/echo', async (req) => {
    // Extract the query parameter
    const query = (req.query as { q?: string }).q ?? null;
    return { query };
  });

  app.post(
    '/echo',
    {
      schema: {
        body: {
          type: 'object',
          required: ['msg'],
          properties: {
            msg: { type: 'string' },
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              echoed: { type: 'string' },
            },
          },
        },
      },
    },
    async (req) => {
      const { msg } = req.body as { msg: string };
      return { echoed: msg };
    }
  );
};

export default routes;
