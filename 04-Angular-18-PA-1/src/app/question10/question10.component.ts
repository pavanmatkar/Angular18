import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question10.component.html',
  styleUrl: './question10.component.css'
})
export class Question10Component {
firstName : string = "";
lastName : string = "";
}
