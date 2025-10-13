import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface AuthUser {
  token: string;
  username?: string;
}

const SESSION_KEY = 'Session Storage';

@Injectable({ providedIn: 'root' })
export class Auth1Service {
  private userSubject = new BehaviorSubject<AuthUser | null>(this.loadFromSession());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

    private loadFromSession(): AuthUser | null {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) as AuthUser : null;
  }

  private saveToSession(user: AuthUser | null) {
    if (user) sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else sessionStorage.removeItem(SESSION_KEY);
    this.userSubject.next(user);
  }

  login(credentials: { username: string; password: string }): Observable<AuthUser> {
  // Mock a "successful" login if username & password are non-empty
  return new Observable<AuthUser>((observer) => {
    if (credentials.username && credentials.password) {
      const user = { token: 'fake-jwt-token', username: credentials.username };
      this.saveToSession(user);
      observer.next(user);
      observer.complete();
    } else {
      observer.error('Invalid credentials');
    }
  });
}

  logout() {
    this.saveToSession(null);
    this.router.navigate(['/login']);
  }

  get token() {
    return this.userSubject.value?.token ?? null;
  }

  isAuthenticated() {
    return !!this.token;
  }
}
