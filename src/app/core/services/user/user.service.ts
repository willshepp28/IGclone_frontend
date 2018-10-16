import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _profileUrl = "http://localhost:3000/api/v1";
  private _userUrl = "http://localhost:3000/api/v1/users";


  constructor(
    private http: HttpClient
  ) { }



  getUser(id){
     return this.http.get<any>(`https://igclone-backend.herokuapp.com/api/v1/profile/${id}`)
    // return this.http.get<any>(`http://localhost:3000/api/v1/profile/${id}`);
  }


  discoverUsers(){
    return this.http.get<any>(this._userUrl);
  };
}
