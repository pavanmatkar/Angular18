import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ThemeToogleComponent } from '../theme-toogle/theme-toogle.component';

@Component({
  selector: 'app-greeting-card',
  standalone: true,
  imports: [CardComponent, ThemeToogleComponent],
  templateUrl: './greeting-card.component.html',
  styleUrl: './greeting-card.component.css'
})
export class GreetingCardComponent {

}
