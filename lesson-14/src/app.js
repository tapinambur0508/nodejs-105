import path from 'node:path';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';

import { swaggerDocs } from './middlewares/swaggerDocs.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

app.use(cors());

app.use('/api-docs', swaggerDocs());

app.use('/avatars', express.static(path.resolve('src', 'public/avatars')));

app.use(cookieParser());

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
