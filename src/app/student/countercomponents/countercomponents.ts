import { Component } from '@angular/core';
import { Counterservice } from '../../services/counterservice';
@Component({
  selector: 'app-countercomponents',
  imports: [],
  templateUrl: './countercomponents.html',
  styleUrl: './countercomponents.css'
})
export class Countercomponents {

  count: number = 0;

  constructor(private counterService: Counterservice) { this.updateCount(); }

  updateCount() {
    this.count = this.counterService.getCount();
  }

  //increment count
  incrementCount() {
    this.counterService.incrementCount();
    this.updateCount();
  }


  //decrement count
  decrementCount() {
    this.counterService.decrementCount();
    this.updateCount();
  }

  //reset count
  resetCount() {
    this.counterService.resetCount();
    this.updateCount();
  }

  //get latest count
  getCount() {
    this.updateCount();
  }
}
