import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  constructor(private modal: ModalService){}
  
  async showConfirm(){
    const ok = await this.modal.open({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this item? This action cannot be undone.',
      okText: 'Delete',
      cancelText: 'Cancel',
      showCancel: true 
    });

    if (ok) {
      // user confirmed
      console.log('delete confirmed');
    } else {
      console.log('cancelled');
    }
  }
}
