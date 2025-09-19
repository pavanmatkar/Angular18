import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question20',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question20.component.html',
  styleUrl: './question20.component.css'
})
export class Question20Component {
  studentObj: any = {
    firstName: '',
    isAcceptTerms: false,
  }
}
