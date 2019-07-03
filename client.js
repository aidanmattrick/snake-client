/**
 * Establishes connection with the game server
 */


const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data); //
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server"); //
    conn.write('Name: AdM');
  });

  /*
  conn.on('connect', (data) => {
    conn.write('Move: up', data);
    setInterval(() => {
      conn.write('Move: up', data);
    }, 1000);
  });
  */

  conn.on('data', (data) => {
    console.log('Server says: ', data); //
  });



  return conn;


};

module.exports = connect;

