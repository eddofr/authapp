import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class AuthGuard implements CanActivate{

  constructor( private auth: AuthService ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean>{
      console.log(this.auth.isAuthenticated$);
      return this.auth.isAuthenticated$;
    }

}
