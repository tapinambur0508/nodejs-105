import 'dotenv/config';

import app from './app.js';
import { initDBConnection } from './db.js';

async function bootstrap() {
  try {
    await initDBConnection();

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
