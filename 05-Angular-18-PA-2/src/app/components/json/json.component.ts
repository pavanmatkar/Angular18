import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgIf, CommonModule } from "@angular/common";
import { SharedModule } from '../../shared/shared/shared.module';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [NgIf, CommonModule,SharedModule],
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})

export class JsonComponent implements OnInit{
  showModal: boolean = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  users: User[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    // Load mock users from local JSON
    this.http.get<User[]>('users.json')
    .subscribe({
      next: data => {
        this.users = data;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load user data', err);
        this.loading = false;
      }
    });
  }
}
