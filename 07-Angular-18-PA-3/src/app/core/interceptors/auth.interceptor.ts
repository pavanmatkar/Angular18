import { Injectable } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth1Service } from '../services/auth1.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth1Service);
  const token = auth.token;
  if (!token) return next(req);

  const cloned = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  return next(cloned);
};
