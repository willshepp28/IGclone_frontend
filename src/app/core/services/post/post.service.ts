import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'https://igclone-backend.herokuapp.com/api/v1/posts';
  private postUrl2 = "http://localhost:3000/api/v1/posts";


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



/*
|--------------------------------------------------------------------------
| GET - gets all posts
|--------------------------------------------------------------------------
*/
getPosts(): Observable<any[]> {
  return this.http.get<any>(this.postUrl);
}



/*
|--------------------------------------------------------------------------
| POST - adds a new post
|--------------------------------------------------------------------------
*/
addNewPost(postInfo){
  return this.http.post<any>(this.postUrl + "/addPost", postInfo);
  
}



/*
|--------------------------------------------------------------------------
| GET - get one post when user likes/unlikes or saves/unsaves
|--------------------------------------------------------------------------
*/
getUpdatedPost(postId): Observable<any[]> {
  return this.http.get<any>(this.postUrl + "/update/" + postId)
};



/*
|--------------------------------------------------------------------------
| Gets all the logged in users posts
|--------------------------------------------------------------------------
*/
getAllUserPosts(id): Observable<any[]> {
  return this.http.get<any>(`${this.postUrl}/all/${id}`)
 }



/*
|--------------------------------------------------------------------------
| GET - gets one post
|--------------------------------------------------------------------------
*/
  getPost(postId): Observable<any[]> {
    return this.http.get<any>(`https://igclone-backend.herokuapp.com/api/v1/posts/${postId}`)
  }



}
