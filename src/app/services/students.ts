import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Students {

  //data service
  private students = [
    {
      id: 1,
      name: 'Pushpendra Mishra',
      course: 'Angular',
      marks: 85
    },

    {
      id: 2,
      name: 'Manorama',
      course: 'React',
      marks: 88
    },

    {
      id: 3,
      name: 'Ramji Mishra',
      course: 'ASP .NET Core',
      marks: 98
    },

    {
      id: 4,
      name: 'shivesh gupta',
      course: 'History',
      marks: 89
    }
  ];

  constructor() { }

  //get all students
  getStudent(){
    return this.students;
  }

  //get students by id
  getStudentById(Id: number){
    return this.students.find(students => students.id === Id)
  }


  //add students
  addStudent(name: string, course: string, marks: number){
    const newStudent = {
      id: this.students.length + 1,
      name: name,
      course: course,
      marks: marks
    };
    this.students.push(newStudent);
  }


  //delete students
  deleteStudents(id: number){
    this.students = this.students.filter(student => student.id !== id);
  }


  //get total students
  getTotalStudents(){
    return this.students.length;
  }
}
