const fs = require('node:fs/promises');

const content = JSON.stringify(
  { brand: 'Lexus', model: 'LS 430', year: 2006, price: 10000 },
  undefined,
  2,
);

fs.writeFile('write.json', content)
  .then(() => console.log('Done'))
  .catch((error) => console.error(error));
