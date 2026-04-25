import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  register(user: User): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(u => u.email === user.email);

    if (existingUser) {
      return false;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const validUser = users.find(
      u => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}