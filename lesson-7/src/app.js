import express from 'express';

import studentRoutes from './routes/students.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

// app.use(express.json());

app.use('/students', studentRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
