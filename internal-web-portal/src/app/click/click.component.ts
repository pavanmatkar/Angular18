import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  standalone: true,
  imports: [],
  templateUrl: './click.component.html',
  styleUrl: './click.component.css'
})
export class ClickComponent {
  count: number = 0;

onClick(): void {
  this.count++;  
}
}
