import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question13',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './question13.component.html',
  styleUrl: './question13.component.css'
})
export class Question13Component {
name: string = "Pavan S. Matkar"
}
