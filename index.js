const express = require('express');
const server = express();

const port = 8080;

server.use(express.static(__dirname + '/public'));

server.get('/rerecounter', (req, res) => {
  res.sendFile('/public/html/index.html', {root: __dirname});
});
server.listen(port, () => {
console.log('Server listening on', port);
});
