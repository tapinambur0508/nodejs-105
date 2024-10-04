import cors from 'cors';
import express from 'express';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
);

app.get('/books', (req, res) => {
  res.json([
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' },
    { title: 'Title 4' },
  ]);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
