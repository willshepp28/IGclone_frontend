import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { TotalService } from '../core/services/total/total.service';
import { PostService } from '../core/services/post/post.service';
import { DecodeTokenService } from "../core/helper/decodeToken/decode-token.service";






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profilePic: string;
  username: string;
  show = false;
  loadPosts = false;


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
    private postService: PostService,
    private decodeToken: DecodeTokenService
  ) { }


  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
     console.log(event);
  }

  ngOnInit() {




    // var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    var tokenId;

 

    // using paramMap returns a observable
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          let theid = parseInt(params.get('id'));
       

         
          /*
            1. We run this conditional statement to check if their is a id in the request params
            2. if not and or the request.params is equal to the id of the currently loggin in user
              we know that this is the loggin in user and we can show the saved posts and update properties on this user

          */
          if (isNaN(theid) || theid == token.user[0].id) {
            
            // page only routing to logged in users page
            // Because we are only getting the token and not the route params
          this.show = true;
          //  token = this.getDecodedAccessToken(localStorage.getItem('token'));
           tokenId = token.user[0].id;

          } else {

            
            tokenId = theid
          }

          this.userService.getUser(tokenId)
          .subscribe(
            response => {
            
                document.title = "@" +response.username + " • Instagram";
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
        response => { this.userInfo.followerAmount = parseInt(response) },
        error => console.log(error)
      )

  }


  ngOnDestroy(){
    
    document.title = "Instagram"; // when user leaves profile component, we change the titlebar back to instagram
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





}
