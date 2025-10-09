import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule],
  templateUrl: './product-tabs.component.html',
  styleUrl: './product-tabs.component.css'
})
export class ProductTabsComponent {
  product = {
    name: 'Angular Handbook',
    overview: 'A comprehensive guide to Angular 18 covering components, services, routing, and more.',
    details: {
      author: 'John Doe',
      pages: 320,
      publisher: 'Tech Books Publishing',
      isbn: '123-4567890123'
    },
    reviews: [
      { user: 'Alice', rating: 5, comment: 'Amazing book, very clear explanations!'},
      { user: 'Bob', rating: 4, comment: 'Great resource but could use more examples.'},
      { user: 'Charlie', rating: 5, comment: 'A must-read for Angular developers!'}
    ]
  };
}
