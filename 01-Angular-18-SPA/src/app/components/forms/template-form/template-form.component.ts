import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../../constant/constant';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  studentObj: any = {
    firstName:  '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false
  }

  validationMessage: any = Constant.VALIDATION_MESSAGE;
  formvalue: any;
  onSubmit(){
    debugger;
    this.formvalue = this.studentObj;
  }
  resetForm(){
    this.studentObj = {
    firstName:  '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false
  }
  }
}
