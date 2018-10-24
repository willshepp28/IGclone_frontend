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

  post = <any>[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private hashService: HashstagsService
  ) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          let name = parseInt(params.get("id"));

          this.hashService.getPostByHashtag(name)
            .subscribe(
              response => {
                console.log(response);
                this.post = response;
              },
              error => { console.log(error)}
            )
        }
      )
  }

}
