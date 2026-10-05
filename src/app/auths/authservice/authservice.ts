import { Component } from '@angular/core';
import { Authservice as AuthService } from '../../services/authservice';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-authservice',
  imports: [FormsModule],
  templateUrl: './authservice.html',
  styleUrl: './authservice.css'
})
export class Authservice {

  username = '';
  password = '';

  message = '';
  messageType = '';

  constructor(private authService: AuthService) {}

  login() {

    const success = this.authService.Login(
      this.username,
      this.password
    );

    if (success) {

      this.message = 'Login successful!';
      this.messageType = 'success';

    } else {

      this.message = 'Invalid username or password!';
      this.messageType = 'error';

    }
  }

  logout() {

    this.authService.Logout();

    this.username = '';
    this.password = '';

    this.message = 'Logged out successfully!';
    this.messageType = 'success';
  }

  isLoggedIn() {

    return this.authService.isLoggedIn();
  }

  getCurrentUsername() {

    return this.authService.getUsername();
  }
}
