import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getStudentsController,
  getStudentController,
  createStudentController,
  deleteStudentController,
  replaceStudentController,
  updateStudentController,
  changeStudentDutyController,
} from '../controllers/students.js';

import { isValidID } from '../middlewares/isValidID.js';
import { validateBody } from '../middlewares/validateBody.js';

import { studentSchema } from '../validation/student.js';

const router = express.Router();
const jsonParser = express.json({
  type: 'application/json',
});

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', isValidID, ctrlWrapper(getStudentController));

router.post(
  '/',
  jsonParser,
  validateBody(studentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/:id', isValidID, ctrlWrapper(deleteStudentController));

router.put(
  '/:id',
  isValidID,
  jsonParser,
  ctrlWrapper(replaceStudentController),
);
router.patch(
  '/:id',
  isValidID,
  jsonParser,
  ctrlWrapper(updateStudentController),
);

router.patch(
  '/:id/duty',
  isValidID,
  jsonParser,
  ctrlWrapper(changeStudentDutyController),
);

export default router;
