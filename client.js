// const stdin = process.stdin
// stdin.resume()
// stdin.setEncoding('utf8');
const {IP, PORT} = require('./constants');

const net = require('net');
const connect = function(data) {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); // setting encoding into human readable msg

  conn.on('connect', (data) => {  
    console.log("Successfully connected to game server");
    // conn.write('Move: up');
    
  })
  conn.on('data', (data) => { //get message back from server
    console.log('NEW MESSAGE FROM THE SERVER', data)
  })
  // conn.on('end', (data) => { trying to get msg when disconnected by the serrver but no data sent
  //   console.log(data);
  // })
  return conn;
}
module.exports = connect;



// for (let i = 1; i <= 10 ; i++) { // moveup with timeout delay
    //   setTimeout(() => {
    //     conn.write('Move: left');
    //   }, 100 * i)
    // };

    // for (let i = 1; i <= 10 ; i++) { //move up with setInterval
    //   setInterval(() => {
    //     conn.write('Move: left');
    //   }, 100 )
    // };