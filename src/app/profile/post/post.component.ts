import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";


import { AuthService } from '../../core/authentication/auth.service';






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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    var token;
    var tokenId;

    this.route.parent.params.subscribe(params => {
      console.log(`******* /profile/${params.id}`);
      console.log(params);
      console.log("********");

      if (params.id === "post") {
        this.userOrNot = "You";
     
        token = this.getDecodedAccessToken(localStorage.getItem('token'));
        tokenId = token.user[0].id;
        
        
      } else {
        this.userOrNot = "User"
        tokenId = params.id;
        
      }
    });



    console.log("inside post")
    console.log(tokenId);
    console.log("inside post")

    this.auth.getAllUserPosts(tokenId)
      .subscribe(

        response => { console.log(response), this.post = response, this.postLength = this.post.length },
        error => console.log(error)
      )
  }


  selectPost(postId) {
    this.router.navigate(['/post', postId])
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
