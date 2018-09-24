import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(
    private http: HttpClient
  ) { }



  getUser(id){
    return this.http.get<any>(`http://localhost:3000/api/v1/profile/${id}`)
  }
}
