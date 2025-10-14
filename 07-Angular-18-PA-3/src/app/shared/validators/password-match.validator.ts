import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  passwordField: string,
  confirmPasswordField: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(passwordField)?.value;
    const confirmPassword = formGroup.get(confirmPasswordField)?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  };
}
// command to create validator
// ng g class shared/validators/password-match --type=validator
