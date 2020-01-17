let app = require('../app');
let debug = require('debug')('expressapp:server');
let http = require('http');
var socket = require('socket.io');
/**
 * Get port from environment and store in Express.
 */
let port = normalizePort(process.env.PORT || '3002');
app.set('port', port);
/**
 * Create HTTP server.
 */
let server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
const io = socket.listen(server);
io.origins('*:*');
io.on('connection', (socket) => {
  console.log('SOcket.io Connection Successfull!');
  // 'join event'
  socket.on('join', (data) => {
  });
  // catching the message event
  socket.on('message', (data) => {
  });
  // Event when a client is typing
  socket.on('typing', (data) => {
  });
});
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
