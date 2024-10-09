import createHttpError from 'http-errors';

import { getStudents, getStudent } from '../services/students.js';

export async function getStudentsController(req, res) {
  const students = await getStudents();

  res.json({
    status: 200,
    message: 'Students received successfully',
    data: students,
  });
}

export async function getStudentController(req, res, next) {
  const { id } = req.params;

  const student = await getStudent(id);

  if (student === null) {
    // throw createHttpError(404, "Student not found");
    // throw createHttpError[404]("Student not found");
    return next(new createHttpError.NotFound('Student not found:('));
  }

  res.json({
    status: 200,
    message: 'Student received successfully',
    data: student,
  });
}
