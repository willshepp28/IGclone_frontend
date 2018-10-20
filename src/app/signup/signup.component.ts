import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserForm: FormGroup;
  registerUserData: any[] = [];



  constructor(
    private authService: AuthService,
    private router: Router,
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

     // stop here if form is invalid
     if (this.registerUserForm.invalid) {
      return;
  }

  
  this.authService.registerUser(this.registerUserForm.value)
    .subscribe(
      response => {

        // redirect to the login page
        this.router.navigate(["/login"])
      },

      error => console.log(error)
    )
  }


}
