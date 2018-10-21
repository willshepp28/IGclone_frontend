import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {



  constructor(
    private http: HttpClient
  ) { }



  

/*
|--------------------------------------------------------------------------
| GET - we use this to get all the followers that, where the user hasnt accepted their follow request yet.
|--------------------------------------------------------------------------
*/
  getFollowers(token): Observable<any[]>{
    return this.http.get<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/${token}`);
  }


/*
|--------------------------------------------------------------------------
| POST - made when loggin in user, makes a request to follow another user
|--------------------------------------------------------------------------
*/
  followUser(userId): Observable<any[]> {
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/sendRequest/${userId}`, userId);
  }

/*
|--------------------------------------------------------------------------
| POST - accepts follow requests, made by other users
|--------------------------------------------------------------------------
*/
  acceptFollowRequest(id): Observable<any[]> {
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/acceptRequest`, id)
  }


/*
|--------------------------------------------------------------------------
| POST - denies follow requests, made by other users
|--------------------------------------------------------------------------
*/  
  denyFollowRequest(id): Observable<any[]> {
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/denyRequest`, id)
  }
}
