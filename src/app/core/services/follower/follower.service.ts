import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {



  constructor(
    private http: HttpClient
  ) { }


  getFollowers(token){
    return this.http.get<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/${token}`);
  }

  
/*
 *  we need the token to see who the currently logged in user is
 *  and we need userId to see who the logged in user is requesting to follow
 */
  followUser(userId){
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/sendRequest/${userId}`, userId);
  }


  acceptFollowRequest(id){
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/acceptRequest`, id)
  }


  denyFollowRequest(id){
    return this.http.post<any>(`https://igclone-backend.herokuapp.com/api/v1/follower/denyRequest`, id)
  }
}
