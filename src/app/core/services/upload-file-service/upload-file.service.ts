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

// Not used yet!


}
