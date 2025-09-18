import { Component, NgModule } from '@angular/core';
import { NgClass, NgStyle, NgIf } from "@angular/common";
import { FormsModule, NgForm, } from '@angular/forms';

@Component({
  selector: 'app-question9',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, NgIf],
  templateUrl: './question9.component.html',
  styleUrl: './question9.component.css'
})
export class Question9Component {

}
