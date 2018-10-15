import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserForm: FormGroup

  registerUserData = [];
  constructor(
    private _auth: AuthService,
     private _router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.registerUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]]
  });
  }


  registerUser(){

    console.log(this.registerUserForm.value)

     // stop here if form is invalid
     if (this.registerUserForm.invalid) {
      return;
  }

  this._auth.registerUser(this.registerUserForm.value)
    .subscribe(
      response => {

        // redirect to the login page
        this._router.navigate(["/login"])
      },

      error => console.log(error)
    )
  }

  // registerUser() {
  //  this._auth.registerUser(this.registerUserData)
  //  .subscribe(
  //    response => { 
       
  //     console.log("issa success") 
  //     console.log( response )
  //     localStorage.setItem('token', response.token);
  //     this._router.navigate(["/login"]);

  //     error => { console.log("issa error") ,console.log( error )}
  //   }
  //  );
  // }

}
