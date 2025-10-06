import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../shared/components/password-validators/password-validators.component';

@Component({
  selector: 'app-password-special-character',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-special-character.component.html',
  styleUrl: './password-special-character.component.css'
})
export class PasswordSpecialCharacterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        passwordStrengthValidator()
      ]]
    });
  }

  submit(){
    if(this.form.valid){
      console.log('Password accepted:', this.form.value.password);
    } else{
      console.log('Invalid password');
    }
  }
}
