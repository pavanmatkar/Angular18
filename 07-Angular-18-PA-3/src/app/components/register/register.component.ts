import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator('password', 'confirmPassword') }
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      alert('✅ Passwords match!');
    }
  }
}
