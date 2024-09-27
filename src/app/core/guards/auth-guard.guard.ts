import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
export const redirectToLogin: CanActivateFn = (route, state) => {
  let router: Router = inject(Router);
  if (state.url === '/auth') return router.createUrlTree(['auth', 'login'])
  return true;
}