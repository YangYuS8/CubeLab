import { createServer } from 'node:http';

const server = createServer((_request, response) => {
  response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  response.end(
    JSON.stringify({
      name: 'CubeLab API',
      status: 'placeholder',
    }),
  );
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000, () => {
    console.log('CubeLab API placeholder listening on http://localhost:3000');
  });
}

export { server };
