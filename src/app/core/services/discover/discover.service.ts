import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private herokuUrl = 'https://igclone-backend.herokuapp.com/api/v1/discover/';
  private serverUrl = "http://localhost:3000/api/v1/discover/"; // used in production 

  constructor(private http: HttpClient) { }


/*
|--------------------------------------------------------------------------
| GET - gets new users that the logged in user isnt following
|--------------------------------------------------------------------------
*/
  discoverUsers(): Observable<any[]>{
    return this.http.get<any>(this.herokuUrl + "users");
  };



/*
|--------------------------------------------------------------------------
| GET - lets the user discover new posts
|--------------------------------------------------------------------------
*/
  getDiscoverPosts(): Observable<any[]>{
    return this.http.get<any>(this.herokuUrl + "posts");
  };
}
