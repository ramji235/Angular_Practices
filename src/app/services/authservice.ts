import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  private loggedIn = false;
  private username = '';
  constructor() { }

  //login method
  Login(username: string, password: string): boolean{
    if(username === 'admin' && password === 'admin1234'){
      this.loggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  //logout method
  Logout(): void{
    this.loggedIn = false;
    this.username = '';
  }

  //check login status
  isLoggedIn(): boolean{
    return this.loggedIn;
  }

  //get current username
  getUsername(): string{
    return this.username;
  }
}
