import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question12',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './question12.component.html',
  styleUrl: './question12.component.css'
})
export class Question12Component {
currentDate : Date = new Date();
}
