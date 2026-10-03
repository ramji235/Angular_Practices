import { Component } from '@angular/core';
import { Students } from '../../services/students';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.html',
  styleUrl: './dataservice.css'
})
export class Dataservice {

  students: any[] = [];
  selectedStudent: any = null;

  constructor(private studentsService: Students) {
    this.loadStudents();
  }

  // ================================
  // LOAD ALL STUDENTS
  // ================================
  loadStudents() {

    this.students = this.studentsService.getStudents();
  }


  // ================================
  // FIND STUDENT
  // ================================
  findStudent(id: number) {

    this.selectedStudent =
      this.studentsService.getStudent(id);
  }


  // ================================
  // ADD STUDENT
  // ================================
  addStudent() {

    this.studentsService.addStudent(
      'Neha',
      'Angular',
      88
    );

    this.loadStudents();
  }


  // ================================
  // DELETE STUDENT
  // ================================
  deleteStudent(id: number) {

    this.studentsService.deleteStudent(id);

    this.loadStudents();

    // Agar deleted student selected tha
    if (this.selectedStudent?.id === id) {
      this.selectedStudent = null;
    }
  }


  // ================================
  // REFRESH DATA
  // ================================
  refreshData() {

    this.loadStudents();
  }
}