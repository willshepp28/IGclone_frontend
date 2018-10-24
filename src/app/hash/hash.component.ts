import { Component, OnInit } from '@angular/core';

import { HashstagsService } from "./../core/services/hashtags/hashstags.service";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  posts = <any>[];
  hashtag: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private hashService: HashstagsService
  ) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.hashtag = `#${params.get("id")}`;
          // let name = parseInt(params.get("id"));
          let name = params.get("id")

          this.hashService.getPostByHashtag(name)
            .subscribe(
              response => {
                console.log(response);
                this.posts = response;
              },
              error => { console.log(error)}
            )
        }
      )
  }




}
