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

let id = -1;

const handleUserInput = (key) => {
  const moveSnake = (direction) => {
    clearInterval(id);
  
    id = setInterval(() => {
      connection.write(`Move: ${direction}`);
    }, 100);
  
    id;
  };

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
  } else if (key === 't') {
    connection.write('winner!');
  } else if (key === 'y') {
    connection.write('got ya!');
  } else if (key === 'u') {
    connection.write('speeeed');
  }
};

module.exports = {
  setupInput: setupInput,
};