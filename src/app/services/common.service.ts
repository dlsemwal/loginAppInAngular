import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getImg() {
    return this.http.get(config.imgUrl);
  }

  getComments() {
    return this.http.get(config.commentUrl);
  }
  getUsers() {
    return this.http.get(config.usersUrl);
  }
  active(path) {
    if (window.location.pathname.indexOf(path) >= 1) {
      return true;
    } else {
      return false;
    }
  }
}
