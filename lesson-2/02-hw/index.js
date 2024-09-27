import path from 'node:path';
import * as fs from 'node:fs/promises';

const DB_PATH = path.resolve('db.json');

async function main() {
  const todos = await fs.readFile(DB_PATH, 'utf-8');

  const data = JSON.parse(todos);

  data.push({ userId: 1, id: 1000, title: 'Title 1', completed: false });

  await fs.writeFile(DB_PATH, JSON.stringify(data, undefined, 2));
}

main().catch((error) => console.error(error));
