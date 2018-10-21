import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class UserService {


  private herokuUrl = "https://igclone-backend.herokuapp.com/api/v1/";
  private serverUrl = "http://localhost:3000/api/v1/"; // used in production


  constructor(
    private http: HttpClient
  ) { }


/*
|--------------------------------------------------------------------------
| GET - gets one user profile data
|--------------------------------------------------------------------------
*/
  getUser(id) {
    return this.http.get<any>(this.herokuUrl + `profile/${id}`);
  }


}
