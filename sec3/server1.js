const http = require('http');

const server = http
  .createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello Server!</p>');
    res.end('<p>Hello dk!</p>');
  })
  .listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기중');
});

server.on('error', (err) => {
  console.error(err);
});
