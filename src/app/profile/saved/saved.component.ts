import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";



import { SavedPostService } from '../../core/services/saved-post/saved-post.service';
import { DecodeTokenService } from "../../core/helper/decodeToken/decode-token.service";






@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  savedPost = [];
  savedPostLength: number;

  constructor(
    private saveService: SavedPostService,
    private router: Router,
    private decodeToken: DecodeTokenService
  ) { }

  ngOnInit() {
  
    // Decode the token to get the user id
    var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem("token"));
    var tokenId = token.user[0].id;


    // then past the userid to get all users the posts that users have saved
    this.saveService.getUsersSavedPost(tokenId)
      .subscribe(
        response => { console.log(response), this.savedPost = response, this.savedPostLength = this.savedPost.length},
        error => console.log(error)
      )
  }

  selectPost(postId) {
    this.router.navigate(['/post', postId])
  }



}
