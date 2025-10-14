import { Component } from '@angular/core';
import { Toast1Service } from '../../core/services/toast1.service';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css'
})
export class Example1Component {
  constructor(private toast: Toast1Service) {}

  notify() {
    this.toast.show('Message sent', { type: 'success', duration: 3000 });
  }
}
