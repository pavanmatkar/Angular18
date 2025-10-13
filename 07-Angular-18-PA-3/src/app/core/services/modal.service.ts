import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalPayload{
  title?: string;
  message: string;
  okText?: string;
  cancelText?: string;
  showCancel?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
// current payload or null
readonly payload$ = new BehaviorSubject<ModalPayload | null>(null);

//internal resolver for the currently open modal
private currentResolver?: (value: boolean) => void;

//Open the modal and return a Promise that resolves true (OK) or false (Cancel/closed)
open(payload: ModalPayload): Promise<boolean>{
//if a modal is already open, close it and resolve false
if(this.currentResolver){
  this.currentResolver(false);
  this.currentResolver = undefined;
}
this.payload$.next({
  title: payload.title ?? 'Message',
  message: payload.message,
  okText: payload.okText ?? 'OK',
  cancelText: payload.cancelText ?? 'Cancel',
  showCancel: payload.showCancel ?? false
});

return new Promise<boolean>(resolve => {
  this.currentResolver = (val: boolean) => {
    resolve(val);
    this.currentResolver = undefined;
    // hide payload after resolve
    this.payload$.next(null);
  };
});
}  

// Called by the modal UI to resolve a choice
resolve(value: boolean){
  if (this.currentResolver){
    this.currentResolver(value);
  } else {
    // no-op but ensure modal closed
    this.payload$.next(null);
  }
}

// Force close without resolving true (resolves false)
close(){
  this.resolve(false);
}
}
