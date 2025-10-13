import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  private _message = new BehaviorSubject<string>('');
  message$ = this._message.asObservable();

  show(message: string, duration =  3000){
    this._message.next(message);
    setTimeout(() => this._message.next(''), duration); // hide after duration
  }
}
