import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgIf, CommonModule } from "@angular/common";

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})

export class JsonComponent implements OnInit{
  users: User[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    // Load mock users from local JSON
    this.http.get<User[]>('assets/users.json')
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
