import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-question24',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question24.component.html',
  styleUrl: './question24.component.css'
})
export class Question24Component {
  listOfCountries : any[] = [
    "India",
    "China",
    "USA",
    "Japan",
    "Russia",
    "Dubai",
    "Africa",  
  ]
}