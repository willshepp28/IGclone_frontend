import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = "https://igclone-backend.herokuapp.com/api/v1/";
  private Url2 = "http://localhost:3000/api/v1/";


  constructor(
    private http: HttpClient
  ) { }



  getUser(id){
    return this.http.get<any>(this.url + `profile/${id}`);
  }


  discoverUsers(){
    return this.http.get<any>(this.Url2 + "users");
  };
}
