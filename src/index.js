const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write("Hello world");
  res.end();
});

server.listen(port);