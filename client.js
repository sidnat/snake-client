const net = require("net");
const { IP, PORT, playerName, success, connecting } = require("./constants");

const connect = () => {
  connecting;

  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    success;
  });

  conn.on("connect", () => {
    conn.write(`Name: ${playerName}`);
  });

  conn.on("data", (data) => {
    console.log("Server says again: ", data);
  });
  
  return conn;
};

module.exports = {
  connect: connect,
};