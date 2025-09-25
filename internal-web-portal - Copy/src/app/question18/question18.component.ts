import { Component } from '@angular/core';
import { HighlightDirective } from '../directive/highlight.directive';
import { Question19Component } from '../question19/question19.component';

@Component({
  selector: 'app-question18',
  standalone: true,
  imports: [Question19Component,HighlightDirective],
  templateUrl: './question18.component.html',
  styleUrl: './question18.component.css'
})
export class Question18Component {

}
