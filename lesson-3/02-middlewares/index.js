import express from 'express';

const app = express();

function middleware1(req, res, next) {
  console.log('Middleware 1');

  next();
}

function middleware2(req, res, next) {
  console.log('Middleware 2');

  next();
}

function middleware3(req, res, next) {
  console.log('Middleware 3');

  next();
}

// app.use((req, res, next) => {
//   const {apiKey} = req.query;

//   if (apiKey !== "12345") {
//     return res.status(403).send("You are not allowed to make this request");
//   }

//   next();
// });

app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

function checkAPIKey(req, res, next) {
  const { apiKey } = req.query;

  if (apiKey !== '12345') {
    return res.status(403).send('You are not allowed to make this request');
  }

  next();
}

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.get(
  '/movies',
  checkAPIKey,
  middleware1,
  middleware1,
  middleware1,
  middleware1,
  (req, res) => {
    const x = undefined.unknown();

    res.send('Movies');
  },
);

// Handle 404 Error
app.use((req, res, next) => {
  res.status(404).send('Not Found:(');
});

// Handle Internal Server Error
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Internal Server Error');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
