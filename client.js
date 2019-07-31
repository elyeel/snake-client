const stdin = process.stdin
stdin.resume()
stdin.setEncoding('utf8');

const net = require('net');
const connect = function(data) {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); // setting encoding into human readable msg
  // conn.on('connect', () => {
  //   conn.write(data);
  // })
  // conn.on('data', (data) => {
  //   conn.write("Name: RIS");
  // })
  

  // stdin.on('connect', (data) => {
  //   conn.write('Name: Ris');
  // })

  conn.on('connect', (data) => {  
    console.log("Successfully connected to game server");
    conn.write('Move: up');
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
  })
  conn.on('data', (data) => { //get message back from server
    console.log('NEW MESSAGE FROM THE SERVER', data)
  })
  // conn.on('end', (data) => { trying to get msg when disconnected by the serrver but no data sent
  //   console.log(data);
  // })
  return conn;
  conn
}
module.exports = connect;