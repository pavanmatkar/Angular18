import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Output() ratingSelected = new EventEmitter<number>();

  stars = [1,2,3,4,5];

  selectedRating(star: number){
    this.ratingSelected.emit(star);
  }

  getStarWidth(star: number): string {
    if (this.rating >= star) return '100%';
    if (this.rating + 1 > star) return `${(this.rating - (star -1)) * 100}%`;
    return '0%';
  }
}
