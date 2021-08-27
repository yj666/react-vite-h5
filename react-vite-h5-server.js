const server = require('pushstate-server');

server.start({
  port: 443,
  directory: './dist'
})