import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  standalone: true,
  imports: [],
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.css'
})
export class NgmodelComponent {
firstName: string = 'Pavan';
  lastName: string = 'Matkar';
  age: number = 30;
  location: string = 'Malkapur';
}
