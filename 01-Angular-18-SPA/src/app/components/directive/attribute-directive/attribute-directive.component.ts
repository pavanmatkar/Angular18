import { Component } from '@angular/core';
import { CommonModule, NgClass } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  // CommonModule is necessary to use directive
  // FormsModule is required to use ngModel
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = "bg-primary";
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  customerStyle: any = {
    'color': 'black',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%'
  };

  studentList: any[] = [
    {studId:12, totalMarks:23, gender:'male', name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, totalMarks:33, gender:'female', name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, totalMarks:67, gender:'male', name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, totalMarks:98, gender:'female', name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, totalMarks:20, gender:'male', name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, totalMarks:50, gender:'male', name:'FFF', city: 'Thane', isActive:  true},
  ]

  addRedClass(){
    this.div1BgColor = 'bg-danger';
  }
  addBlueClass(){
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active;
  }

}

