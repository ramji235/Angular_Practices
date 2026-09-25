import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templates',
  imports: [CommonModule, FormsModule],
  templateUrl: './templates.html',
  styleUrl: './templates.css'
})
export class Templates {
  // Interpolation
  name = 'Ramji Mishra';
  course = 'Angular';

  // Property Binding
  imageUrl = 'https://via.placeholder.com/150';
  isDisabled = false;

  // Event Binding
  message = 'Click the button';

  // Two-way style practice
  username = '';

  // Conditional rendering
  isLoggedIn = true;

  // List rendering
  courses = [
    'Angular',
    'React',
    'Node.js',
    'TypeScript'
  ];

  changeMessage() {
    this.message = 'Button clicked successfully!';
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
