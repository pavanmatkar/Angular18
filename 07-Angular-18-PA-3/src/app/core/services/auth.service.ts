import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject keeps the latest value and emits it to new subscribers
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  
  // Observable for components to subscribe
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();
  
  constructor() { }

  // Call this on login
  login() {
    // logic like API call can go here
    this.loggedInSubject.next(true);
  }

  // Call this on logout
  logout() {
    this.loggedInSubject.next(false);
  }

  // Optional: get current value
  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}
