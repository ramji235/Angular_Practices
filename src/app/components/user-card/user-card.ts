import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {

  name = 'Ramji Mishra';
  role = 'Angular Developer';
  experience = 2

  showDetails = false;

  toggleDetails(){
    this.showDetails = !this.showDetails;
  }
}
