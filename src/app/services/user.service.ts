import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post(this.url + "/user/signup", data, this.httpOptions);
  }

  forgotPassword(data: any) {
    return this.httpClient.post(this.url + "/user/forgotPassword", data, this.httpOptions);
  }

  login(data: any) {
    return this.httpClient.post(this.url + "/user/login", data, this.httpOptions);
  }

  checkToken() {
    return this.httpClient.get(this.url + "/user/checkToken");
  }

  changePassword(data: any) {
    return this.httpClient.post(this.url + "/user/changePassword", data, this.httpOptions);
  }
}
