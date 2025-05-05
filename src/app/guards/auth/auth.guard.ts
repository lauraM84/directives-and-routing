import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  if (authServ.isAuth) {
    return true;

  } else {
    alert("You are not authorized to access this page. Please log in.");
    return false;
  }

};
