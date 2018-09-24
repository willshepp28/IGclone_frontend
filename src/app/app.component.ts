import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";


import { AuthService } from './core/authentication/auth.service';
import { FollowerService } from './core/services/follower/follower.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  followRequests = [];
  followRequestLength: number;

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _followService: FollowerService
  ){}


  getFollowers(){
    // get userId
    var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var tokenId = token.user[0].id;


    this._followService.getFollowers(tokenId)
      .subscribe(
        response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
        error => console.log(error)
      )
  }


  approveRequest(followerId){
    
    this._followService.acceptFollowRequest({id: followerId})
      .subscribe(
        response => { 

          var token = this.getDecodedAccessToken(localStorage.getItem('token'));
          var tokenId = token.user[0].id;

          
         this._followService.getFollowers(tokenId)
          .subscribe(
            response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
            error => console.log(error)
          )
        },
        error => console.log(error)
      )
  }

  

  denyRequest(followerId){

    
    this._followService.denyFollowRequest({id: followerId})
      .subscribe(
        response => { 

          var token = this.getDecodedAccessToken(localStorage.getItem('token'));
          var tokenId = token.user[0].id;

          
         this._followService.getFollowers(tokenId)
          .subscribe(
            response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
            error => console.log(error)
          )
        },
        error => console.log(error)
      )
  }
  


  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


  isAuthenticated(): boolean{
    
    if(this._authService.loggedIn()) {
      // console.log(localStorage.getItem('token'))
      return true;
    } else {
      return false;
    }
  }


  clear(){
    localStorage.clear();
  }

  showToken(){
    return localStorage.getItem('token');
  }

 

}
