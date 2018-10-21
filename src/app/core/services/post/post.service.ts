import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class PostService {

  private herokuUrl = 'https://igclone-backend.herokuapp.com/api/v1/posts';
  private serverUrl = "http://localhost:3000/api/v1/posts"; // used in production


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
  return this.http.get<any>(this.herokuUrl);
}



/*
|--------------------------------------------------------------------------
| POST - adds a new post
|--------------------------------------------------------------------------
*/
addNewPost(postInfo){
  return this.http.post<any>(this.herokuUrl + "/addPost", postInfo);
  
}



/*
|--------------------------------------------------------------------------
| GET - get one post when user likes/unlikes or saves/unsaves
|--------------------------------------------------------------------------
*/
getUpdatedPost(postId): Observable<any[]> {
  return this.http.get<any>(this.herokuUrl + "/update/" + postId)
};



/*
|--------------------------------------------------------------------------
| Gets all the logged in users posts
|--------------------------------------------------------------------------
*/
getAllUserPosts(id): Observable<any[]> {
  return this.http.get<any>(`${this.herokuUrl}/all/${id}`)
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
