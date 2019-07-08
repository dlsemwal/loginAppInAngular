import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    this.http.post(config.loginUrl, loginData).subscribe((res: any) => {
      console.log(config.loginUrl, res);
      this.lStorage.setToken(res.id);
      this.router.navigate(['/dashboard']);
      this.lStorage.setUser(res.user.full_name);
    });

  }


  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }

}
