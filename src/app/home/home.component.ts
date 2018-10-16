import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';


import { AuthService } from '../core/authentication/auth.service';
import { LikeService } from '../core/services/like/like.service';
import { CommentService } from '../core/services//comments/comment.service';
import { FollowerService } from '../core/services//follower/follower.service';
import { SavedPostService } from '../core/services/saved-post/saved-post.service';
import { PostService } from '../core/services/post/post.service';
import { DecodeTokenService } from "../core/helper/decodeToken/decode-token.service";





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = [];
  postLength: number;
  comments = [];
  followers = [];
  userComment;
  commentPlaceholder: string = "Add a Comment ...";
  isError = false;



  postSaved: boolean = false;


  private _likeUrl = "http://localhost:3000/api/v1/likes";



  constructor(
    private authService: AuthService,
    private likeService: LikeService,
    private commentService: CommentService,
    private followerService: FollowerService,
    private savePostService: SavedPostService,
    private postService: PostService,
    private router: Router,
    private http: HttpClient,
    private decodeToken: DecodeTokenService
  ) { }

  ngOnInit() {





    this.authService.getPosts()
      .subscribe(
        response => {
          // console.log(response),
            this.posts = response,
            this.postLength = this.posts.length
        },
        error => {
          if (error instanceof HttpErrorResponse) {

            if (error.status === 401) {
              this.router.navigate(["/login"]);
            }
          }
        }
      )



  }


  submit(event, postId) {
    // https://stackoverflow.com/questions/37577919/angular2-submit-form-by-pressing-enter-without-submit-button


    if (event.keyCode == 13) {
  
      event.preventDefault();

      this.commentService.addComment({ id: postId, comment: event.target.value })
        .subscribe(
          response => {

            this.authService.getPosts()
              .subscribe(
                response => {
                  this.posts = response,
                    this.postLength = this.posts.length
                  
                    // reset input value
                  event.target.value = " ";
                },
                error => console.log(error)
              )
          }
        )


    }
  }



  LikePost(id) {



    // we add the like
    this.likeService.addLike({ id: id })
      .subscribe(
        response => {

          console.log("getting something")

          // we get the like by passing the 
          this.postService.getUpdatedPost(id)
            .subscribe(

              response => {

                for(let i =0; i < this.posts.length; i++) {
                  
                  if(response[0].id === this.posts[i].id) {
                    
                    this.posts[i].totalLikes = response[0].totalLikes
                }
              }
                
              },
              error => {
                if (error instanceof HttpErrorResponse) {

                  if (error.status === 401) {
                    this.router.navigate(["/login"]);
                  }
                }
              }
            )


        },
        error => { console.log("Not going through"), console.log(error) }
      )

  }


  save(id) {

    console.log(id);

    this.savePostService.savePost({ id: id })
      .subscribe(
        response => {

          console.log("hdfoidhfaoisfjoifjiodfjoeijf")
          // update post with new save info
          this.postService.getUpdatedPost(id)
            .subscribe(

              response => {

                for(let i = 0; i < this.posts.length; i++) {

                  if(response[0].id === this.posts[i].id) {


                    if(this.posts[i].isSaved) {
                      this.posts[i].isSaved = false;

                    } else {
                      this.posts[i].isSaved = true;
                    }

                  }
                }
              }
            )
        }
      )

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
