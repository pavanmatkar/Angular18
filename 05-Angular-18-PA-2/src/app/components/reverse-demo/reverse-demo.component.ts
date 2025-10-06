import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../shared/pipes/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reverse-demo',
  standalone: true,
  imports: [CommonModule, ReversePipe,FormsModule],
  templateUrl: './reverse-demo.component.html',
  styleUrl: './reverse-demo.component.css'
})
export class ReverseDemoComponent {
  name: string = 'Angular18';
}
