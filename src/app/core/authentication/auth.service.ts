import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://igclone-backend.herokuapp.com/api/v1/";
  private url2 = "http://localhost:3000/api/v1/";

  constructor(
    private http: HttpClient
  ) { }



/*
|--------------------------------------------------------------------------
| POST - to signup user
|--------------------------------------------------------------------------
*/
  registerUser(user) {
    return this.http.post<any>(this.url + "signup", user);
  };



/*
|--------------------------------------------------------------------------
| POST - to login user
|--------------------------------------------------------------------------
*/
  loginUser(user) {
    return this.http.post<any>(this.url + "login", user);
  };



/*
|--------------------------------------------------------------------------
| Checks if the user is logged in. Returns 
|   * returns true if there is a token
|   * returns false if there is not a token
|--------------------------------------------------------------------------
*/
  loggedIn() {
    return !!localStorage.getItem('token');
  };



/*
|--------------------------------------------------------------------------
| Gets token 
|--------------------------------------------------------------------------
*/
  getToken(): string {
    return localStorage.getItem('token');
  };


}


