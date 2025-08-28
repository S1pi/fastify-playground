import { FastifyPluginAsync, FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyReply {
    customHeader?: string;
  }
}

const replyExample: FastifyPluginAsync = async (app) => {
  app.addHook('preHandler', async (_req, reply: FastifyReply) => {
    reply.customHeader = 'X-Custom-Value';
  });

  app.addHook('onSend', async (_req, reply: FastifyReply, payload) => {
    if (reply.customHeader) {
      reply.header(reply.customHeader, 'Active');
    }
    return payload;
  });

  app.get('/exercise/reply', async () => {
    return {
      message: 'Custom header should be shown in the response headers.',
    };
  });
};

export default replyExample;
