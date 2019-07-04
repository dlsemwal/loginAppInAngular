import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  imgUrl = 'https://jsonplaceholder.typicode.com/photos';
  commentUrl = 'https://jsonplaceholder.typicode.com/comments';
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  getImg() {
    return this.http.get(this.imgUrl);
  }

  getComments() {
    return this.http.get(this.commentUrl);
  }
  getUsers() {
    return this.http.get(this.usersUrl);
  }
}
