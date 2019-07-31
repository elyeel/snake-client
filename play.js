const connect = require('./client');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function(data) {
//   const conn = net.createConnection({ 
//     host: '192.168.88.218',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); // setting encoding into human readable msg
//   // conn.on('connect', () => {
//   //   conn.write(data);
//   // })
//   conn.on('data', (data) => { //get message back from server
//     console.log('NEW MESSAGE FROM THE SERVER', data)
//   })
//   return conn;
// }


console.log('Connecting ...');
connect();