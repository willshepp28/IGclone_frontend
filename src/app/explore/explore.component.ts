import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";


// Services
import { FollowerService } from '../core/services/follower/follower.service';
import { DiscoverService } from '../core/services/discover/discover.service';


// Helpers
import { DecodeTokenService } from "../core/helper/decodeToken/decode-token.service";






@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  users: any[] = [];
  posts: any[] = [];
  screenWidth;
  displayDiscoverSection: boolean = true;




  //  if browser is less than 581 we need to make the discover section disappear

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private followService: FollowerService,
    private decodeToken: DecodeTokenService,
    private discoverService: DiscoverService
  ) { }



/*
|--------------------------------------------------------------------------
| We listen for a window resize with @HostListener to know whether or not to show discover section
|  * If the screen is greater than or equal to 595, we display discover section
|  * If the screen is less than 595, we remove display discover section from screen
|--------------------------------------------------------------------------
*/  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    
    if (event.target.innerWidth >= 595 && this.displayDiscoverSection === false) {
      this.displayDiscoverSection = true;
    }

    if(event.target.innerWidth < 595) {
      this.displayDiscoverSection = false;
    }
  }

  

  ngOnInit() {


    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 595) {
      this.displayDiscoverSection = false;
      console.log("The screen width is less than 581px")
    }

    this.discoverService.discoverUsers()
      .subscribe(

        response => { console.log(response), this.users = response },
        error => console.log(error)
      )

    // This gets all the users post in IG_Clone
    this.discoverService.getDiscoverPosts()
      .subscribe(
        response => { console.log(response), this.posts = response },
        error => console.log(error)
      )
  }


  followUser(userId) {
    console.log(`User id is : ${userId}`)

    // var token = this.getDecodedAccessToken(localStorage.getItem('token'));
    var token = this.decodeToken.getDecodedAccessToken(localStorage.getItem("token"));
    var tokenId = token.user[0].id;

    this.followService.followUser(userId)
      .subscribe(
        response => { console.log(response) },
        error => console.log(error)
      )
  }


  selectPost(postId) {
    this.router.navigate(['/post', postId])
  }



}
