import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../core/authentication/auth.service';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = [];
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  registerUser() {
   this._auth.registerUser(this.registerUserData)
   .subscribe(
     response => { 
       
      console.log("issa success") 
      console.log( response )
      localStorage.setItem('token', response.token);
      this._router.navigate(["/login"]);

      error => { console.log("issa error") ,console.log( error )}
    }
   );
  }

}
