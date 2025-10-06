import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {
  showModal: boolean = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
