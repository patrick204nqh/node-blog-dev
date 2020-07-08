const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<h1>Karl Patrick</h1>');
  res.write('<p>hello, world!</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});
