import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css'
})
export class MultiStepFormComponent {
  form: FormGroup;
  currentStep = 0;

  constructor(private fb: FormBuilder) {
    // Define the form with all steps grouped
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      loanDetails: this.fb.group({
        amount: ['', Validators.required],
        term: ['', Validators.required]
      }),
      confirmation: this.fb.group({
        agree: [false, Validators.requiredTrue]
      })
    });
  }

  nextStep(): void {
    if (this.currentStep < 2) this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 0) this.currentStep--;
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Form submitted!', this.form.value);
      alert('Form submitted! Check console for values.');
      this.form.reset();
      this.currentStep = 0;
    } else {
      alert('Please fill all required fields.');
    }
  }
}
