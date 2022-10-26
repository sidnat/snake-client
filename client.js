const net = require("net");

const connect = () => {
  console.log("Connecting ...");

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: SID");
  });

  // setInterval(() => {
  //   conn.write("Move: up")
  // }, 50)

  conn.on("data", (data) => {
    console.log("Server says again: ", data);
  });
  
  return conn;
};

module.exports = {
  connect: connect
};