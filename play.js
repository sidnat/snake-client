const { connect } = require('./client');
const snakeGame = connect();
// establishes a connection with the game server

console.log("Connecting ...");

snakeGame.on("data", (data) => {
  console.log("Server says: ", data);
});