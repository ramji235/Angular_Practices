import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings',
  imports: [FormsModule],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css'
})
export class DataBindings {

  //Interpolation data binding...........

  title: string = 'Data Bindings';
  studentName: string = 'Pushpendra Mishra';
  course: string = 'Angular Fundamentals';

  //Property data binding...........
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  buttonDisabled: boolean = true;

  //Event data binding...........
  message: string = 'Click the button to see the message.!';
  count: number = 0;

  //Two-way data binding...........
  username: string = '';
  email: string = '';

  //methods for event data binding...........
  showmessage(): void{
    this.message = 'Button clicked!';
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
