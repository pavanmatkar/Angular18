import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function passwordStrengthValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if(!value) return null;

    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*()<>?":{}|<>]/.test(value);

    return hasNumber && hasSpecial ? null: {passwordStrength: true};
  };
}

@Component({
  selector: 'app-password-validators',
  standalone: true,
  imports: [],
  templateUrl: './password-validators.component.html',
  styleUrl: './password-validators.component.css'
})
export class PasswordValidatorsComponent {

}
