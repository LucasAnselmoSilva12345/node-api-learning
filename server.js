import { fastify } from 'fastify';

const server = fastify();

server.get('/', () => {
  return 'Server is running...';
});

server.listen({
  port: 3333,
});
