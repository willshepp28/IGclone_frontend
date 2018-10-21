import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private herokuUrl = "https://igclone-backend.herokuapp.com/api/v1/total";
  private serverUrl = "http://localhost:3000/api/v1/total"; // used in production

  constructor(
    private http: HttpClient
  ) { }


/*
|--------------------------------------------------------------------------
| GET - gets the total number of posts a user has made
|--------------------------------------------------------------------------
*/
  getNumberOfPosts(id){
    return this.http.get<any>(this.herokuUrl + `/postAmount/${id}`);
  }


/*
|--------------------------------------------------------------------------
| GET - gets the total number of users, the logged in user is following
|--------------------------------------------------------------------------
*/
  getTotalFollowing(id) {
    return this.http.get<any>(this.herokuUrl + `/following/${id}`);
  }


/*
|--------------------------------------------------------------------------
| GET - gets the total number of users that are following, the logged in user
|--------------------------------------------------------------------------
*/
  getUserWhereFollower(id) {
    return this.http.get<any>(this.herokuUrl + `/follower/${id}`);
  }


}
