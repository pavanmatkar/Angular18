import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Question19Component } from '../question19/question19.component';

@Component({
  selector: 'app-question17',
  standalone: true,
  imports: [Question19Component,FormsModule,NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './question17.component.html',
  styleUrl: './question17.component.css'
})
export class Question17Component {
  role: string = '';
}
