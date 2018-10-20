import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private commentUrl = "https://igclone-backend.herokuapp.com/api/v1/comments";
  private commentUrl2 = "http://localhost:3000/api/v1/comments";

  constructor(
    private http: HttpClient
  ) { }

/*
|--------------------------------------------------------------------------
| POST - Add a new comment
|--------------------------------------------------------------------------
*/
  addComment(comment){
    return this.http.post<any>(this.commentUrl, comment)
  }


/*
|--------------------------------------------------------------------------
| GET - gets all comments on one post
|--------------------------------------------------------------------------
*/
  getAllPostsOnAComment(postId){
    return this.http.get<any>(`${this.commentUrl}/${postId}`)
  }
}
