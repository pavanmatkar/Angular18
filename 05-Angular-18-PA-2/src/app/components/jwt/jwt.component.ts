import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jwt',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './jwt.component.html',
  styleUrl: './jwt.component.css'
})
export class JwtComponent {
  username = '';
  password = '';
  error = '';

  constructor(private http:HttpClient, private router: Router){}

  login(){
    this.http.post<{token: string}>('/api/login', {username: this.username, pasword: this.password})
      .subscribe({
        next: (res) => {
          localStorage.setItem('jwtToken', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: () => this.error = 'Invalid credentials'
      });
  }
}
