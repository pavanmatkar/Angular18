import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-question22',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question22.component.html',
  styleUrl: './question22.component.css'
})
export class Question22Component implements OnInit {
  employees: any[] = [];
  // this is known as dependency injection
  constructor(private UsrSrv: UserServiceService){

  }
  ngOnInit(): void {
    this.employees =  this.UsrSrv.getEmployees();
  }
}
