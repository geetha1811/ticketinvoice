// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simulate authentication (In real-world, you'll check credentials via HTTP request)
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'dummy-token'); // Store a token
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
