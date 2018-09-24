import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {



  private _likeUrl = "http://localhost:3000/api/v1/likes";

  constructor(
    private http: HttpClient

  ) { }


  // registerUser(user) {
  //   return this.http.post<any>(this._signupUrl, user)
  // }


  // addLike(postId) {
  //   return this.http.post<any>(this._likeUrl, postId)
  // }

  // addLike(postId): Observable<any> {
  //   return this.http.post<any>(this._likeUrl, postId)
  // }

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
