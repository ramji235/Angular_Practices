import { CommonModule } from '@angular/common';
import { Highlight } from '../highlight';
import { Component, ElementRef, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  imports: [CommonModule, Highlight],
  templateUrl: './angular-directives.html',
  styleUrl: './angular-directives.css'
})
export class AngularDirectives {

  isLoggedIn: boolean = false;
  courses: string[] = ['Angular', 'React', 'Vue', 'Node.js'];

  isActive: boolean = true;
  textColor: string = 'blue';
  fontSize: string = '16px';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  changStyle() {
    this.isActive = !this.isActive;
  }

  changeStyle(): void {
    if(this.textColor === 'blue') {
      this.textColor = 'red';
      this.fontSize = '20px';
    }
    else{
      this.textColor = 'blue';
      this.fontSize = '16px';
    }
  }

  // constructor(private element: ElementRef){

  // }

  // @HostListener('MouseEnter') OnMouseEnter(){
  //   this.element.nativeElement.style.backgroundColor = "yellow";
  // }

  // @HostListener('MouseLeave') OnMouseLeave(){
  //   this.element.nativeElement.style.backgroundColor="purple";
  // }
}
