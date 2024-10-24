export function notFoundHandler(req, res, next) {
  res.status(404).send('Not Found');
}
