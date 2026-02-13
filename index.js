const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>\n');
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
