import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.write('Server is running');

  return response.end();
});

server.listen(3333);
