import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Retrieve JWT token (e.g. stored after login)
  const token = localStorage.getItem('jwtToken');

  // if token exists, clone request and add Authorization header
  const authReq = token
    ? req.clone({
      setHeaders: { Authorization: `Bearer ${token}`},
    })
    : req;

    //Pass the modified (or original) request to the next handler
  return next(authReq);
};
