import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';






@Injectable({
  providedIn: 'root'
})
export class SavedPostService {

  private saveUrl = "https://igclone-backend.herokuapp.com/api/v1/savedPost";
  private saveUrl2 = "http://localhost:3000/api/v1/savedPost";

  constructor(
    private http: HttpClient
  ) { }



/*
|--------------------------------------------------------------------------
| POST - saves a post 
|--------------------------------------------------------------------------
*/
  savePost(postId) {

    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this.saveUrl, postId,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }


  
/*
|--------------------------------------------------------------------------
| GET- gets all posts a user has saved
|--------------------------------------------------------------------------
*/
  getUsersSavedPost(id) {
    return this.http.get<any>(`https://igclone-backend.herokuapp.com/api/v1/savedPost/${id}`)
  }
}
