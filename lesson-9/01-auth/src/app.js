import express from 'express';

import routes from './routes/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

// app.use(express.json());

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
