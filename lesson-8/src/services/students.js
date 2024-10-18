import { Student } from '../models/student.js';

export async function getStudents({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
}) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const studentQuery = Student.find();

  if (typeof filter.minAge !== 'undefined') {
    studentQuery.where('age').gte(filter.minAge);
  }

  if (typeof filter.maxAge !== 'undefined') {
    studentQuery.where('age').lte(filter.maxAge);
  }

  const [total, students] = await Promise.all([
    Student.countDocuments(studentQuery),
    studentQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    students,
    page,
    perPage,
    totalItems: total,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
}

export function getStudent(studentId) {
  return Student.findById(studentId);
}

export function createStudent(student) {
  return Student.create(student);
}

export function deleteStudent(studentId) {
  return Student.findByIdAndDelete(studentId);
}

export function updateStudent(studentId, student) {
  return Student.findByIdAndUpdate(studentId, student, { new: true });
}

export function changeStudentDuty(studentId, onDuty) {
  return Student.findByIdAndUpdate(studentId, { onDuty }, { new: true });
}
