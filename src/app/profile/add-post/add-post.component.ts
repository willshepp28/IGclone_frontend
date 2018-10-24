import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../core/services/post/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HashstagsService } from 'src/app/core/services/hashtags/hashstags.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  selectedFile: File = null;
  fd = new FormData();
  caption: string = null;
  private url = "https://igclone-backend.herokuapp.com/api/v1/imageUpload/";

  constructor(
    private http: HttpClient,
    private postService: PostService,
    private hashService: HashstagsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  createFormData(event) {

    console.log(event.target.text);

      this.selectedFile = <File>event.target.files[0];
      this.fd.append('file', this.selectedFile, this.selectedFile.name);
    
  }


  addText(event) {
    console.log(this.caption);
    this.caption = event.target.text;
    console.log(this.selectedFile);
 
  }

  upload() {
    
    this.fd.append('caption','caption', 'living my best life');
    console.log(this.fd);
    this.http.post(this.url + "newPost", this.fd)
    .subscribe( result => {
      console.log(result)

      var userInfo = {
        photo: result,
        caption: this.caption
      };

      this.postService.addNewPost(userInfo)
        .subscribe(
          response => {
            console.log(response),

            // we get the post.id then 
            this.hashService.createHashTag(response)
              .subscribe(
                  response => { console.log(response),this.router.navigate(['/profile/post'], { relativeTo: this.route});}

              )
            
          },
          error => console.log(error)
        )
    });
  }

}
