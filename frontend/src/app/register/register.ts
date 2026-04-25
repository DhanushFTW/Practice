import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser(): void {
    if (!this.name || !this.email || !this.password) {
      this.message = 'All fields are required';
      return;
    }

    const success = this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password
    });

    if (success) {
      alert('Registration successful');
      this.router.navigate(['/login']);
    } else {
      this.message = 'Email already registered';
    }
  }
}