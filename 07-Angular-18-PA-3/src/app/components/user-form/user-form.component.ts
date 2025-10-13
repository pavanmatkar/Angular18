import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

    // Create the nested form
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(0)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    });
  }

  // Submit handler
  submit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form invalid');
      this.userForm.markAllAsTouched();
    }
  }

  // Helper for template validation
  get f() {
    return this.userForm.controls;
  }

  get address() {
    return this.userForm.get('address') as FormGroup;
  }

}
