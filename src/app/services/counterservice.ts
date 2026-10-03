import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Counterservice {

  private count : number = 0;
  constructor() { }

  //get current count
  getCount(){
    return this.count;
  }

  //increment count
  incrementCount(){
    this.count++;
  }


  //decrement count
  decrementCount(){
    this.count--;
  }


  //reset count
  resetCount(){
    this.count = 0;
  }
}
