import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { UploadFileService } from '../../core/services/upload-file-service/upload-file.service';






@Component({
  selector: 'app-change-profile-pic',
  templateUrl: './change-profile-pic.component.html',
  styleUrls: ['./change-profile-pic.component.css']
})
export class ChangeProfilePicComponent implements OnInit {


  selectedFile: File = null;
  fd = new FormData();
  private url = "https://igclone-backend.herokuapp.com/api/v1/imageUpload/";
 


  constructor(
    private uploadService: UploadFileService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  }

  upload() {
    console.log(this.fd);
    
    this.http.post(this.url + "changeProfile", this.fd)
    .subscribe( result => {
      console.log(result)
      this.router.navigate(['/profile/post'], { relativeTo: this.route});
    });
  }




 
  

}
