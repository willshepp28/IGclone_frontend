import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  loginForm: FormGroup;
  loading = false;
  Iserror = false;
  message;


  // ngClass 
  // https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass

  constructor(
    private _auth: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(4)],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });

  this.loginForm.valueChanges.subscribe(console.log);
  }


loginUser(){

  console.log(this.loginForm.value);
  
  this._auth.loginUser(this.loginForm.value)
    .subscribe(
      response => {
        localStorage.setItem("token", response.token);

        // redirect /home
        this._router.navigate(["/home"]);
      },
      error => {
        this.Iserror = true;
        this.message = "You entered the wrong email or password!"
        console.log("This is a error brah")
      }
    )
}



  // loginUser() {
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //       response => {
  //         localStorage.setItem("token", response.token);
  //         // console.log(response);
  //         this._router.navigate(["/home"])
  //       },
  //       error => console.log( error )
  //     )
  // }

  


}
