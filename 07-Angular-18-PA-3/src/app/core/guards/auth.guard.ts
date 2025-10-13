import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth1Service } from '../services/auth1.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth1Service);
  const router = inject(Router);

  if (auth.isAuthenticated()) return true;
  router.navigate(['/login']);
  return false;
};
