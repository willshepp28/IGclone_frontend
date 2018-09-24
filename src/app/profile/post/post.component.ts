import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var tokenId = token.user[0].id;

    this.auth.getUserPost(tokenId)
      .subscribe(
        response => { console.log(response), this.post = response, this.postLength = this.post.length},
        error => console.log(error)
      )
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
