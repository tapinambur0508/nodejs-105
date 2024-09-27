import path from 'node:path';
import * as fs from 'node:fs/promises';

// async function readMovies() {
//   const data = await fs.readFile("movies.txt", {encoding: "utf-8"});

//   return data;
// }

export function readFile() {
  const FILE_PATH = path.resolve('movies', 'movies.txt');

  return fs.readFile(FILE_PATH, { encoding: 'utf-8' });
}
