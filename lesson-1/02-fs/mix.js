const fs = require('node:fs/promises');

const FILE_NAME = 'mix.txt';

fs.readFile(FILE_NAME, { encoding: 'utf-8' })
  .then((data) => data.toUpperCase())
  .then((data) => fs.writeFile(FILE_NAME, data))
  .then(() => console.log('Done'))
  .catch((error) => console.error(error));
