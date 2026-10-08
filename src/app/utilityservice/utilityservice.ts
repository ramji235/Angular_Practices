import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilityservice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './utilityservice.html',
  styleUrl: './utilityservice.css'
})
export class Utilityservice {

  textValue: string = '';
  numberValue: number = 0;

  result: string = '';
  resultType: string = '';

  // String Methods

  convertUppercase(): void {
    this.result = this.toUpperCase(this.textValue);
    this.resultType = 'Uppercase Result';
  }

  toUpperCase(textValue: string): string {
    return textValue.toUpperCase();
  }

  convertLowercase(): void {
    this.result = this.toLowerCase(this.textValue);
    this.resultType = 'Lowercase Result';
  }

  toLowerCase(textValue: string): string {
    return textValue.toLowerCase();
  }

  reverseText(): void {
    this.result = this.reverseString(this.textValue);
    this.resultType = 'Reverse Result';
  }

  reverseString(textValue: string): string {
    return textValue.split('').reverse().join('');
  }

  checkLength(): void {
    this.result = this.getStringLength(this.textValue).toString();
    this.resultType = 'String Length';
  }

  getStringLength(textValue: string): number {
    return textValue.length;
  }

  capitalizeText(): void {
    this.result = this.capitalize(this.textValue);
    this.resultType = 'Capitalized Result';
  }

  capitalize(textValue: string): string {
    if (!textValue) {
      return '';
    }

    return textValue.charAt(0).toUpperCase() + textValue.slice(1).toLowerCase();
  }

  // Number Methods

  squareNumber(): void {
    this.result = (this.numberValue * this.numberValue).toString();
    this.resultType = 'Square Result';
  }

  doubleNumber(): void {
    this.result = (this.numberValue * 2).toString();
    this.resultType = 'Double Result';
  }

  isEven(value: number): boolean {
    return value % 2 === 0;
  }

  checkEven(): void {
    const answer = this.isEven(this.numberValue);

    this.result = answer ? 'Yes, it is an Even Number' : 'No, it is an Odd Number';
    this.resultType = 'Even/Odd Result';
  }

  // Date Methods

  showDate(): void {
    this.result = new Date().toLocaleDateString();
    this.resultType = 'Current Date';
  }

  showTime(): void {
    this.result = new Date().toLocaleTimeString();
    this.resultType = 'Current Time';
  }

  clearResult(): void {
    this.result = '';
    this.resultType = '';
    this.textValue = '';
    this.numberValue = 0;
  }

}
