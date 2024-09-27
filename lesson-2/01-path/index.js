import { readFile } from './movies/index.js';

async function main() {
  const movies = await readFile();

  console.log(movies);
}

main().catch((error) => console.error(error));
