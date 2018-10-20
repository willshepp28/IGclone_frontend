import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private url = 'https://igclone-backend.herokuapp.com/api/v1/discover/';
  private url2 = "http://localhost:3000/api/v1/discover/"; // used in production 

  constructor(private http: HttpClient) { }


/*
|--------------------------------------------------------------------------
| GET - gets new users that the logged in user isnt following
|--------------------------------------------------------------------------
*/
  discoverUsers(){
    return this.http.get<any>(this.url + "users");
  };



/*
|--------------------------------------------------------------------------
| GET - lets the user discover new posts
|--------------------------------------------------------------------------
*/
  getDiscoverPosts(){
    return this.http.get<any>(this.url + "posts");
  };
}
