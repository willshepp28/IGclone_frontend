import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _postUrl = 'https://igclone-backend.herokuapp.com/api/v1/posts';
  private _postUrl2 = "http://localhost:3000/api/v1/posts";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



/*
|--------------------------------------------------------------------------
| Adds a new post
|--------------------------------------------------------------------------
*/

addPost(id) {
  return this.http.post<any>(this._postUrl,id);
};



/*
|--------------------------------------------------------------------------
| Get one post when user likes/unlikes or saves/unsaves
|--------------------------------------------------------------------------
*/
getUpdatedPost(postId){
  console.log("inside get updated post");
  console.log(`Post Id: ${postId}`)
  return this.http.get<any>(this._postUrl + "/update/" + postId)
};



/*
|--------------------------------------------------------------------------
| Gets all the users posts
|--------------------------------------------------------------------------
*/
getAllUserPosts(id){
  return this.http.get<any>(`${this._postUrl}/all/${id}`)
 }
  

/*
|--------------------------------------------------------------------------
| Get one post
|--------------------------------------------------------------------------
*/
  getPost(postId){
    return this.http.get(`https://igclone-backend.herokuapp.com/api/v1/posts/${postId}`)
    // return this.http.get(`http://localhost:3000/api/v1/posts/${postId}`);
  }



/*
|--------------------------------------------------------------------------
| Get all posts
|--------------------------------------------------------------------------
*/
getAllPosts(){
  return this.http.get(this._postUrl);
}


selectPost(postId) {
  this.router.navigate(['/post', postId])
}


/*
|--------------------------------------------------------------------------
| Add a new post
|--------------------------------------------------------------------------
*/

addNewPost(postInfo){
  return this.http.post<any>(this._postUrl + "/addPost", postInfo)
}



getUserPost(id){
  return this.http.get<any>(`${this._postUrl}posts/${id}`)
 }


}
