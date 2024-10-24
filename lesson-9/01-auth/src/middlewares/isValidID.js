import { isValidObjectId } from 'mongoose';
import createHttpErrors from 'http-errors';

export function isValidID(req, res, next) {
  const { id } = req.params;

  if (isValidObjectId(id) !== true) {
    return next(createHttpErrors(400, 'ID is not valid'));
  }

  next();
}
