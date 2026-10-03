import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [CommonModule, RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

}
