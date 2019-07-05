import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
import { LStorageService } from './l-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private router: Router, private http: HttpClient, private lStorage: LStorageService) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return this.lStorage.getToken() != null && !this.isTokenExpired();

  }

  isTokenExpired(): boolean {
    return false;
  }

  login(loginData): void {
    this.http.post(`${config.baseUrl}/login`, loginData).subscribe((res: any) => {
      this.lStorage.setToken(res.data.token);
      this.router.navigate(['/dashboard']);
      this.lStorage.setUser(res.data.user.name);
    });

  }


  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }

}
