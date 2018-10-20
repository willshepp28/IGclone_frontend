import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";


// Services
import { FollowerService } from '../core/services/follower/follower.service';
import { DiscoverService } from '../core/services/discover/discover.service';


// Helpers
import { DecodeTokenService } from "../core/helper/decodeToken/decode-token.service";






@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  users: any[] = [];
  posts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private followService: FollowerService,
    private decodeToken: DecodeTokenService,
    private discoverService: DiscoverService
  ) { }

  ngOnInit() {
    this.discoverService.discoverUsers()
      .subscribe(
        
        response => { console.log(response), this.users = response },
        error => console.log(error)
      )

      // This gets all the users post in IG_Clone
    this.discoverService.getDiscoverPosts()
      .subscribe(
        response => { console.log(response), this.posts = response},
        error => console.log(error)
      )
  }


  followUser(userId){
    console.log(`User id is : ${userId}`)

    // var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem("token"));
    var tokenId = token.user[0].id;

    this.followService.followUser(userId)
      .subscribe(
        response => { console.log(response)},
        error => console.log(error)
      )
  }


  selectPost(postId) {
    this.router.navigate(['/post', postId])
  }



}
