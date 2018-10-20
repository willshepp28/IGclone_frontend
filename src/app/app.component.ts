import { Component } from '@angular/core';

// Services
import { AuthService } from './core/authentication/auth.service';
import { FollowerService } from './core/services/follower/follower.service';
import { DecodeTokenService } from './core/helper/decodeToken/decode-token.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  followRequests: any[] = [];
  followRequestLength: number;

  constructor(
    private authService: AuthService,
    private followService: FollowerService,
    private decodeToken: DecodeTokenService
  ){}




/*
|--------------------------------------------------------------------------
| GET - gets the total number of posts a user has made
|--------------------------------------------------------------------------
*/
  getFollowers(){
   
    var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem("token"));
    var tokenId = token.user[0].id;


    this.followService.getFollowers(tokenId)
      .subscribe(
        response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
        error => console.log(error)
      )
  }


/*
|--------------------------------------------------------------------------
| POST - approves a follow request from another user.
|--------------------------------------------------------------------------
*/
  approveRequest(followerId){
    
    this.followService.acceptFollowRequest({id: followerId})
      .subscribe(
        response => { 

          var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
          var tokenId = token.user[0].id;

          
         this.followService.getFollowers(tokenId)
          .subscribe(
            response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
            error => console.log(error)
          )
        },
        error => console.log(error)
      )
  }
  
  

/*
|--------------------------------------------------------------------------
| POST - denies a follow request, from another user.
|--------------------------------------------------------------------------
*/
  denyRequest(followerId){

    this.followService.denyFollowRequest({id: followerId})
      .subscribe(
        response => { 

          var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
          var tokenId = token.user[0].id;

          
         this.followService.getFollowers(tokenId)
          .subscribe(
            response => { console.log(response), this.followRequests = response, this.followRequestLength = this.followRequests.length},
            error => console.log(error)
          )
        },
        error => console.log(error)
      )
  }
  


/*
|--------------------------------------------------------------------------
| Check is user is logged in or not
|   * used for knowing when to
      display login/login or user account info, in the navbar.
|--------------------------------------------------------------------------
*/
  isAuthenticated(): boolean{
    
    if(this.authService.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }



 

}
