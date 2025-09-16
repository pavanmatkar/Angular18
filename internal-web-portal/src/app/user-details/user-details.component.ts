import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  firstName: string = 'Pavan';
  lastName: string = 'Matkar';
  age: number = 30;
  location: string = 'Malkapur';
}
