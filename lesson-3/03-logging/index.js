import express from 'express';
import pinoHttp from 'pino-http';

const app = express();

app.use(
  pinoHttp({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.get('/movies', (req, res) => {
  res.send('Movies');
});

app.get('/books', (req, res) => {
  res.send('Books');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
