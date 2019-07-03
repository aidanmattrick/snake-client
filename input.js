const stdin = process.stdin;
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */



const handleUserInput = function(stdin) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u001b[A') {
      connection.write('Move: up');
    }
    if (key === '\u001b[B') {
      connection.write('Move: down');
    }
    if (key === '\u001b[C') {
      connection.write('Move: right');
    }
    if (key === '\u001b[D') {
      connection.write('Move: left');
    }
  });
};


const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

module.exports = setupInput;