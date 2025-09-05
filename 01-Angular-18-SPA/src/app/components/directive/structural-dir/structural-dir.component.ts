import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  // CommonModule is needed to be imported to use any directive e.g. *ngIf, *ngFor
  // FormsModule is needed to be imported to use ngModel
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = "";

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane']

  studentList: any[] = [
    {studId:12, name: 'AAA', city: 'Pune', isActive: false},
    {studId:22, name: 'BBB', city: 'Mumbai', isActive: false},
    {studId:33, name: 'CC', city: 'Jalgaon', isActive: true},
    {studId:44, name: 'DD', city: 'Mumbai', isActive: false},
    {studId:55, name: 'EEE', city: 'Nagpur', isActive: false},
    {studId:66, name: 'FF', city: 'Thane', isActive: true}
  ]

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;

    // if (this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // } else {
    //   this.isDiv2Visible = true;
    // }
  }
}

