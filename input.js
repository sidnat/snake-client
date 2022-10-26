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

const handleUserInput = (key, speedMultiplier) => {
  const moveSnake = (direction) => {
    clearInterval(id);

    id = setInterval(() => {
      connection.write(`Move: ${direction}`);
    }, 100 * speedMultiplier);

    id;
  };

  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    moveSnake('up', 1);
  } else if (key === 's') {
    moveSnake('down', 1);
  } else if (key === 'a') {
    moveSnake('left', 2);
  } else if (key === 'd') {
    moveSnake('right', 2);
  } else if (key === 't') {
    connection.write('winner!');
  } else if (key === 'y') {
    connection.write('got ya!');
  } else if (key === 'u') {
    connection.write('speeeed');
  }
};

module.exports = {
  setupInput: setupInput
};