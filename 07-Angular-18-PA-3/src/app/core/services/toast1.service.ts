import { Injectable } from '@angular/core';
import { Toast } from '../models/toast.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Toast1Service {

  private toasts$ = new BehaviorSubject<Toast[]>([]);
  readonly toasts = this.toasts$.asObservable();

  private makeId() {
    return Math.random().toString(36).slice(2, 9);
  }

  show(message: string, opts?: { type?: Toast['type']; duration?: number }) {
    const toast: Toast = {
      id: this.makeId(),
      message,
      type: opts?.type ?? 'info',
      duration: opts?.duration ?? 3000, // default 3s
    };

    const current = this.toasts$.value;
    this.toasts$.next([...current, toast]);

    // auto-remove after duration
    setTimeout(() => this.remove(toast.id), toast.duration);
    return toast.id;
  }

  remove(id: string) {
    const filtered = this.toasts$.value.filter(t => t.id !== id);
    this.toasts$.next(filtered);
  }

  clear() {
    this.toasts$.next([]);
  }

}
