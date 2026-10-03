import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Students {

  private students = [
    {
      id: 1,
      name: 'Rahul',
      course: 'Angular',
      marks: 85
    },
    {
      id: 2,
      name: 'Amit',
      course: 'React',
      marks: 78
    },
    {
      id: 3,
      name: 'Priya',
      course: 'Angular',
      marks: 92
    }
  ];

  constructor() {}

  // Get all students
  getStudents() {
    return this.students;
  }

  // Get student by ID
  getStudent(id: number) {
    return this.students.find(student => student.id === id);
  }

  // Add student
  addStudent(name: string, course: string, marks: number) {

    const newStudent = {
      id: this.students.length + 1,
      name: name,
      course: course,
      marks: marks
    };

    this.students.push(newStudent);
  }

  // Delete student
  deleteStudent(id: number) {

    this.students = this.students.filter(
      student => student.id !== id
    );
  }

  // Total students
  getTotalStudents() {
    return this.students.length;
  }
}