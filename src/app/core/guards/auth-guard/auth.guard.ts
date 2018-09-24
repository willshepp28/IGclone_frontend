import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from '../../authentication/auth.service';






@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){}

  
  canActivate(): boolean {

    if ( this._authService.loggedIn()) {
    //  console.log(this._authService.getToken());
      return true
    } else {
      // console.log(this._authService.getToken());
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
