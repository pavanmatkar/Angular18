import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private storageKey = 'userData';

  setUserData(data: any){
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getUserData(): any{
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearUserData(){
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean{
    return !!this.getUserData();
  }
}
