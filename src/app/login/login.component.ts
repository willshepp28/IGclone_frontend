import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
        response => {
          localStorage.setItem("token", response.token);
          // console.log(response);
          this._router.navigate(["/home"])
        },
        error => console.log( error )
      )
  }

  


}
