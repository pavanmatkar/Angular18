import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-question21',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './question21.component.html',
  styleUrl: './question21.component.css'
})
export class Question21Component {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    userName: new FormControl("",[Validators.email]),
  });
  formValue: any;

  onSave(){
    this.formValue = this.studentForm.value;
  }
}
