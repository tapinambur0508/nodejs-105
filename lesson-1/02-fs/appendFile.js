const fs = require('node:fs/promises');

fs.appendFile('append.txt', 'I love Node.js\n')
  .then(() => console.log('Done'))
  .catch((error) => console.error(error));
