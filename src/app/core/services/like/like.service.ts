import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {



  private _likeUrl = "https://igclone-backend.herokuapp.com/api/v1/likes";
  private _likeUrl2 = "http://localhost:3000/api/v1/likes";
  

  constructor(
    private http: HttpClient

  ) { }


 

  addLike(postId){

    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this._likeUrl, postId, 
    {
      headers: httpHeaders,
      observe: 'response'
    });

  }
}
