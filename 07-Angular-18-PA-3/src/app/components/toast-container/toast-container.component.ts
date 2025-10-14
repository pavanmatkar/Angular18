import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Toast1Service } from '../../core/services/toast1.service';
import { Observable } from 'rxjs';
import { Toast } from '../../core/models/toast.model';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css',
})
export class ToastContainerComponent{
  toasts: Observable<Toast[]>;
  constructor(private toastSvc: Toast1Service) {
    this.toasts = this.toastSvc.toasts;
  }

  dismiss(id: string) {
    this.toastSvc.remove(id);
  }
}
