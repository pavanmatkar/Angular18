import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth1Service } from '../../core/services/auth1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: Auth1Service, private router: Router) {}

  onSubmit() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: (user) => {
        alert(`✅ Login successful! Welcome ${user.username || ''}`);
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('❌ Login failed. Please check your credentials.')
      },
    });
  }
}
