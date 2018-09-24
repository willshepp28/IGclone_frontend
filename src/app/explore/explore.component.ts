import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";


import { AuthService } from '../core/authentication/auth.service';
import { FollowerService } from '../core/services/follower/follower.service';






@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  users = [];
  posts = [];

  constructor(
    private authService: AuthService,
    private followService: FollowerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.discoverUsers()
      .subscribe(
        response => { console.log(response), this.users = response },
        error => console.log(error)
      )

    this.authService.getPost()
      .subscribe(
        response => { console.log(response), this.posts = response},
        error => console.log(error)
      )
  }


  followUser(userId){
    console.log(`User id is : ${userId}`)

    var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var tokenId = token.user[0].id;

    this.followService.followUser(userId)
      .subscribe(
        response => { console.log(response)},
        error => console.log(error)
      )
  }


  logData(id) {
    console.log(`POST ID: ${id}`);
  }


  selectPost(postId) {
    this.router.navigate(['/post', postId])
  }


  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
