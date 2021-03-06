import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  loginForm: FormGroup;
  loading: boolean = false;
  Iserror: boolean = false;
  message: string;


  // ngClass 
  // https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });

  this.loginForm.valueChanges.subscribe(console.log);
  }


loginUser() {

  // We pass the loginForm.value to authenticate the user
  // If successufl we set the token and redirect the user to the /home page
  this.authService.loginUser(this.loginForm.value)
    .subscribe(
      response => {
        localStorage.setItem("token", response.token);

        // redirect /home
        this.router.navigate(["/home"]);
      },
      error => {
        this.Iserror = true;
        this.message = "You entered the wrong email or password!";
        console.log("This is a error brah");
      }
    );
}

  


}
