import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { decode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private router: Router, private http: HttpClient) { }
  clear(): void {
    localStorage.clear();
  }
  isTokenExpired(): boolean {
    return false;
  }
  isAuthenticated(): boolean {

    return localStorage.getItem('token') != null || this.isTokenExpired();
  }

  login(data): void {
    this.http.post('http://localhost:3000/login', data).subscribe((res: any) => {
      if (res.success && res.data.token) {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/']);
      } else {
        alert('Invalid User ID and password');
      }
    });

  }

  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }
  decode() {
    return decode(localStorage.getItem('token'));
  }
}
