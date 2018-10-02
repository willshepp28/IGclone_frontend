import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private _totalUrl = "https://igclone-backend.herokuapp.com/api/v1/total";
  private _totalUrl2 = "http://localhost:3000/api/v1/total";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  getNumberOfPosts(id){
    console.log(id);
    return this.http.get<any>(this._totalUrl + `/postAmount/${id}`);
  }


  getTotalFollowing(id){
    console.log(id);
    return this.http.get<any>(this._totalUrl + `/following/${id}`);
  }

  getUserWhereFollower(id){
    console.log(id);
    return this.http.get<any>(this._totalUrl + `/follower/${id}`);
  }


}
