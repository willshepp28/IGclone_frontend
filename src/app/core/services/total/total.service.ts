import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private _totalUrl = "http://localhost:3000/api/v1/total";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  getNumberOfPosts(){
    return this.http.get<any>(this._totalUrl + "/postAmount");
  }


  getTotalFollowing(){
    return this.http.get<any>(this._totalUrl + "/following");
  }

  getUserWhereFollower(){
    return this.http.get<any>(this._totalUrl + "/follower");
  }


}
