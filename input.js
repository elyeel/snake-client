/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let conn;

// const setupInput = function(conn) {
  
// }

const setupInput = function(conn) {
  conn = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  

  const handleUserInput = process.stdin.on('data', (key) => {
    // console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
  });

  return stdin;
}
module.exports = setupInput;