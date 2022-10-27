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
  const moveSnake = (direction, speedMultiplier) => {
    clearInterval(id);
  
    id = setInterval(() => {
      connection.write(`Move: ${direction}`);
    }, 100 / speedMultiplier);
  
    id;
  };

  const shoutMsg = (phrase) => {
    connection.write(`Say: ${phrase}`);
  };

  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    moveSnake('up', 1);
  } else if (key === 's') {
    moveSnake('down', 1);
  } else if (key === 'a') {
    moveSnake('left', 2);
    //speed multiplier because the snake moves slower going horizontally due to pixel size
  } else if (key === 'd') {
    moveSnake('right', 2);
  } else if (key === 't') {
    shoutMsg('winner!');
  } else if (key === 'y') {
    shoutMsg('got ya!');
  } else if (key === 'u') {
    shoutMsg('speed!');
  }
};

module.exports = {
  setupInput: setupInput,
};