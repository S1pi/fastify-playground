// import { FastifyPluginAsync } from 'fastify';

// const privateRoutes: FastifyPluginAsync = async (app) => {
//   app.log.info('Private routes plugin loaded');

//   // Gets through only if authHooks is successful
//   app.get('/check', async (req) => {
//     return { message: 'This is a private route' };
//   });
// };

// export default privateRoutes;

import { FastifyPluginAsync } from 'fastify';

const privateRoutes: FastifyPluginAsync = async (app) => {
  // HUOM: EI /api/private prefixiä tähän!
  app.get('/ping', async () => ({ ok: true, scope: 'private' }));
};

export default privateRoutes;
