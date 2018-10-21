import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {



  private herokuUrl = "https://igclone-backend.herokuapp.com/api/v1/likes";
  private serverUrl = "http://localhost:3000/api/v1/likes";
  

  constructor(
    private http: HttpClient

  ) { }


 
/*
|--------------------------------------------------------------------------
| POST - Add a new like on a specific post
|--------------------------------------------------------------------------
*/
  addLike(postId){

    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this.herokuUrl, postId, 
    {
      headers: httpHeaders,
      observe: 'response'
    });

  }
}
