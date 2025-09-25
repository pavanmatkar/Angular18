import { Component } from '@angular/core';
import { CustomTitleCasePipePipe } from '../pipe/custom-title-case-pipe.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-question14',
  standalone: true,
  imports: [CustomTitleCasePipePipe,TitleCasePipe],
  templateUrl: './question14.component.html',
  styleUrl: './question14.component.css'
})
export class Question14Component {
blogTitle: string = "this is the title of a blog post"
}
