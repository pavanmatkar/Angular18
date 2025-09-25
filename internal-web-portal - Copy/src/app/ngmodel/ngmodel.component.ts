import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.css'
})
export class NgmodelComponent {
firstName: string = 'Pavan';
  lastName: string = 'Matkar';
  age: number = 30;
  location: string = 'Malkapur';
}
