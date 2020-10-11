const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((_, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write("Hello world from cloud build");
  res.end();
});

server.listen(port);