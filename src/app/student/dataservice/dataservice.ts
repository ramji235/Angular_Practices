import { Component } from '@angular/core';
import { Students } from '../../services/students';
// import { Student } from '../student';
@Component({
  selector: 'app-dataservice',
  imports: [],
  templateUrl: './dataservice.html',
  styleUrl: './dataservice.css'
})
export class Dataservice {
  students: any[] = [];
  selectedStudent: any = null;

  constructor(private studentsService: Students) {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentsService.getStudent();
  }

  findStudent(id: number) {
    this.selectedStudent = this.studentsService.getStudentById(id) ?? null;
  }

  addStudent() {
    this.studentsService.addStudent('roshan', 'angular', 89);
    this.loadStudents();
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudents(id);
    this.loadStudents();
  }
}
