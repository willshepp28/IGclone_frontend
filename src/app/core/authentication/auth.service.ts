import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = "https://igclone-backend.herokuapp.com/api/v1/";
   private Url2 = "http://localhost:3000/api/v1/";

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  registerUser(user) {
    console.log(`User: ${user}`)
    return this.http.post<any>(this.Url + "signup",user);
  };

  loginUser(user) {
    return this.http.post<any>(this.Url + "login", user);
  };

  getPosts() {
    return this.http.get<any>(this.Url + "posts");
  };


  loggedIn() {
    // returns true or false
    // if token is in local storage it returns true. If not it returns false
    return !!localStorage.getItem('token');
  };


   public getToken(): string {
    return localStorage.getItem('token');
  };

  discoverUsers(){
    return this.http.get<any>(this.Url + "users");
  };

  getPost(){
    return this.http.get<any>(this.Url + "post");
  };
  

 getUserPost(id){
  return this.http.get<any>(`${this.Url}posts/${id}`)
 }

 
}


