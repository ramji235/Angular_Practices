import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilityservice {

  constructor() { }

  // String Utilities
  toUpperCase(value: string): string {
    return value.toUpperCase();
  }

  toLowerCase(value: string): string {
    return value.toLowerCase();
  }

  reverseString(value: string): string {
    return value.split('').reverse().join('');
  }

  getStringLength(value: string): number {
    return value.length;
  }

  // Number Utilities
  squareNumber(value: number): number {
    return value * value;
  }

  doubleNumber(value: number): number {
    return value * 2;
  }

  isEven(value: number): boolean {
    return value % 2 === 0;
  }

  // Date Utility
  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }

  // Common Utility
  capitalize(value: string): string {
    if (!value) {
      return '';
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
