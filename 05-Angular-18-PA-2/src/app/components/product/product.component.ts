import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  selectedRating: number | null = null;

  onRatingReceived(rating:number){
    this.selectedRating = rating;
    console.log('Rating received from child:', rating)
  }
}
