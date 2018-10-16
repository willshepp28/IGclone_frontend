import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";


import { AuthService } from '../../core/authentication/auth.service';
import { DecodeTokenService } from "../../core/helper/decodeToken/decode-token.service";
import { PostService } from '../../core/services/post/post.service';






@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  post = [];
  postLength: number;
  userOrNot;



  constructor(
    private auth: AuthService,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private decodeToken: DecodeTokenService
  ) { }

  ngOnInit() {

    var token;
    var tokenId;

    this.route.parent.params.subscribe(params => {
   

      // Checks to see if this is the user or not
      if (params.id === "post") {
        this.userOrNot = "You";
     
        // decode token to get the user id
        token = this.decodeToken.getDecodedAccessToken(localStorage.getItem("token"));
        tokenId = token.user[0].id;
        
        
      } else {
        this.userOrNot = "User"
        tokenId = params.id;
        
      }
    });


    // then pass the user id to get all the users posts
    this.postService.getAllUserPosts(tokenId)
      .subscribe(

        response => { console.log(response), this.post = response, this.postLength = this.post.length },
        error => console.log(error)
      )
  }


  selectPost(postId) {
    this.router.navigate(['/post', postId])
  }


}
