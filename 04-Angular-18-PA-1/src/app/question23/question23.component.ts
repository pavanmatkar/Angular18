import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-question23',
  standalone: true,
  imports: [],
  templateUrl: './question23.component.html',
  styleUrl: './question23.component.css'
})
export class Question23Component implements OnInit{
  userService = inject(UserServiceService);
  userData: any;

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
}
