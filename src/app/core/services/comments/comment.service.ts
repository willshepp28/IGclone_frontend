import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private _commentUrl = "https://igclone-backend.herokuapp.com/api/v1/comments";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  addComment(comment){
    console.log(comment);
    return this.http.post<any>(this._commentUrl, comment)
  }


  getAllPostsOnAComment(postId){
    return this.http.get<any>(`${this._commentUrl}/${postId}`)
  }
}
