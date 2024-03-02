import { Inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

export const authpruebaGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = Inject(AuthService);
  console.log(auth.isAuthenticated$);
  return auth.isAuthenticated$;
};
