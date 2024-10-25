import express from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

app.use(cookieParser());

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
