import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NgIf, AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // reactive snapshot for template convenience
  payload = signal<null | import('../../core/services/modal.service').ModalPayload>(null);

  constructor(private modal:ModalService){
    // subscribe to service payload stream
    modal.payload$.subscribe(p => this.payload.set(p));
  }

  onOk(){
    this.modal.resolve(true);
  }

  onCancel(){
    this.modal.resolve(false);
  }

  onBackdropClick(){
    // close by clicking outside (treat as cancel)
    this.modal.resolve(false);
  }
}
