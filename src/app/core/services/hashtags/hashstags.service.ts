import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HashstagsService {

  private herokuUrl = 'https://igclone-backend.herokuapp.com/api/v1/hash';
  private serverUrl = "http://localhost:3000/api/v1/hash"; // used in production

  constructor(private http: HttpClient) { }

  /*
|--------------------------------------------------------------------------
| GET  - get all the posts associated with this hashtag
|--------------------------------------------------------------------------
*/
getPostByHashtag(hashName){
  return this.http.get<any>(this.serverUrl + `/${hashName}`);
};




  /*
|--------------------------------------------------------------------------
| POST  - create hashtag
|--------------------------------------------------------------------------
*/
createHashTag(postInfo){
  return this.http.post<any>(this.serverUrl + "/addhashtag", postInfo);
}

}
