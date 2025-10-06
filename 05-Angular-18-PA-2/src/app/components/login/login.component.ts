import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule, NgIf } from "@angular/common";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, public auth: AuthService){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){
    const user = this.auth.getUserData();
    if(user){
      this.message = `Already logged in as ${user.username}`;
    }
  }

  login(){
    if(this.loginForm.valid){
      const userData = this.loginForm.value;
      this.auth.setUserData(userData);
      this.message = `Login Successful! Welcome ${userData.username}`;
    }
  }

  logout(){
    this.auth.clearUserData();
    this.message = 'Logged out successfully';
  }
}
