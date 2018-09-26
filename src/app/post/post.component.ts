import { Component, OnInit } from '@angular/core';


import { PostService } from '../core/services/post/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentService } from '../core/services/comments/comment.service';






@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = <any>[];
  comments = <any>[];
  id: number;



  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //let id = parseInt( this.route.snapshot.paramMap.get('id')); // gets the id out of the params

    // using paramMap returns a observable
    this.route.paramMap 
      .subscribe(
        (params: ParamMap) => {
          let theid = parseInt(params.get('id'));
          console.log(theid);

          console.log(`The post id is : ${theid}`)
          this.id = theid;

          this.postService.getPost(theid)
            .subscribe(
              response => { console.log(response), this.post = response},
              error => console.log(error)
            )
          
        }
      )


      this.route.paramMap
        .subscribe(
          (params: ParamMap) => {
            
            let theid = parseInt(params.get('id'));
            
            this.commentService.getAllPostsOnAComment(theid)
              .subscribe(
                response => {console.log(response), this.comments = response},
                error => console.log(error)
              )
          }
        )
    
    console.log(`The ID: ${this.id}`);
  }


  askMe() {
    console.log("Please dont ask me questions");
  };


}
