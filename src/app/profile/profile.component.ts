import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as jwt_decode from "jwt-decode";


import { TotalService } from '../core/services/total/total.service';
import { PostService } from '../core/services/post/post.service';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  burr = "jdlfjdkfjdklsfjdlk";

  profilePic: string;
  username: string;
  show = false;


  postLength: number;

  userInfo = {
    postAmount: 0,
    followingAmount: 0,
    followerAmount: 0

  };




  constructor(
    private userService: UserService,
    private totalService: TotalService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {




    var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var tokenId;


    // using paramMap returns a observable
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          let theid = parseInt(params.get('id'));
       

         

          if (isNaN(theid) || theid == token.user[0].id) {
            console.log("The id is not a number")
            // page only routing to logged in users page
            // Because we are only getting the token and not the route params
          this.show = true;
           token = this.getDecodedAccessToken(localStorage.getItem('token'));
           tokenId = token.user[0].id;

          } else {

            
            tokenId = theid
          }

          this.userService.getUser(tokenId)
          .subscribe(
            response => {
              console.log("Raise the bar")
              console.log(response)
              console.log("Raise the bar")
                ,
                this.username = response.username;
              this.profilePic = response.profilePic;
    
            },
            error => console.log(error)
          )

        }
      )

    // page only routing to logged in users page
    // Because we are only getting the token and not the route params
    // var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    // var tokenId = token.user[0].id;



    // console.log(token.user[0].id);
    // console.log(localStorage.getItem('token'));
      
    console.log("**********")
    console.log(tokenId);
    console.log("***********");

    this.totalService.getNumberOfPosts(tokenId)
      .subscribe(
        response => { this.userInfo.postAmount = parseInt(response) },
        error => console.log(error)
      )


    this.totalService.getTotalFollowing(tokenId)
      .subscribe(
        response => { this.userInfo.followingAmount = parseInt(response) },
        error => console.log(error)
      )


    this.totalService.getUserWhereFollower(tokenId)
      .subscribe(
        response => { this.userInfo.followerAmount = parseInt(response), console.log(this.userInfo) },
        error => console.log(error)
      )

  }



  showAddPost() {
    this.router.navigate(['addPost'], { relativeTo: this.route });
  };

  showChangeProfilePic() {
    this.router.navigate(['changeProfilePic'], { relativeTo: this.route });
  };


  showPosts() {
    this.router.navigate(['post'], { relativeTo: this.route })
  }


  showSaved() {
    this.router.navigate(['saved'], { relativeTo: this.route })
  }


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }




}
