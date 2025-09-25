import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question15',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question15.component.html',
  styleUrl: './question15.component.css'
})
export class Question15Component {
  images: string[] = [
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
    'travel.png',
  ]
}
