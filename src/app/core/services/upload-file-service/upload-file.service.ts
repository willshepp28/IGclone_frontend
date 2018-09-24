import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

// import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  image: any;

  constructor(
    private http: HttpClient
  ) { }

  // fileEvent(fileInput: any) {
  //   const AWSService = AWS;
  //   const region = '<insert your region here>';
  //   const bucketName = '<insert your bucket name>';
  //   const IdentityPoolId = '<insert your identity pool id>';
  //   const file = fileInput.target.files[0];
  // //Configures the AWS service and initial authorization
  //   AWSService.config.update({
  //     region: region,
  //     credentials: new AWSService.CognitoIdentityCredentials({
  //       IdentityPoolId: IdentityPoolId
  //     })
  //   });
  // //adds the S3 service, make sure the api version and bucket are correct
  //   const s3 = new AWSService.S3({
  //     apiVersion: '2006-03-01',
  //     params: { Bucket: bucketName}
  //   });
  // //I store this in a variable for retrieval later
  //   this.image = file.name;
  //   s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
  //    if (err) {
  //      console.log(err, 'there was an error uploading your file');
  //    }
  //  });
  // }


}
