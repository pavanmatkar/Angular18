import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  // class me bina const use kiye bhi veriable create kar sakte hai
  // but ye arrow function hai isliye const keyword use karna padega
  const router = inject(Router);
  const loggedUser = localStorage.getItem('loginUser');
  if (loggedUser != null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
