import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedPostService {

  private _saveUrl = "http://localhost:3000/api/v1/savedPost";

  constructor(
    private http: HttpClient
  ) { }


  savePost(postId){
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(this._saveUrl, postId, 
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }


  getUsersSavedPost(id){
    return this.http.get<any>(`http://localhost:3000/api/v1/savedPost/${id}`)
  }
}
