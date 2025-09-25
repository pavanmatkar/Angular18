import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

listOfEmployees: any[] =[
  {empId: 11, name: 'AAA', city: 'Pune', salary: "10k"},
  {empId: 22, name: 'BBB', city: 'Mumbai', salary: "11k"},
  {empId: 33, name: 'CCC', city: 'Jalgaon', salary: "12k"}, 
  {empId: 44, name: 'DDD', city: 'Mumbai', salary: "13k"},
  {empId: 55, name: 'EEE', city: 'Nagpur', salary: "14k"},
  {empId: 66, name: 'FFF', city: 'Thane', salary: "15k"}
]

}
