let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  const moveSnake = (direction) =>{
    connection.write(`Move: ${direction}`);
  }

  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {      
    moveSnake('up');
  } else if (key === 's') {
    moveSnake('down');
  } else if (key === 'a') {
    moveSnake('left');
  } else if (key === 'd') {
    moveSnake('right');
  } 
};

module.exports = {
  setupInput: setupInput
};