/**
 * Establishes connection with the game server
 */

const {IP, PORT} = require('./constants');

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data); //
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server"); //
    conn.write('Name: AdM');
    conn.write("Say: BIG PUN");
  });

  /*
  conn.on('connect', (data) => {
    conn.write('Move: up', data);
    setInterval(() => {
      conn.write('Move: up', data);
    }, 1000);
  });
  */

  return conn;


};

module.exports = connect;

