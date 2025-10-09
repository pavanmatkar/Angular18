import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackForm: any;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar){
    this.feedbackForm = this.createForm();
  }

private createForm() {
  return this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    category: ['general', Validators.required],
    rating: [5, Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
}

  categories = [
    {value: 'general', viewValue: 'General'},
    {value: 'bug', viewValue: 'Bug Report'},
    {value: 'feature', viewValue: 'Feature Request'},
    {value: 'other', viewValue: 'Other'}
  ];

  submit(){
    if(this.feedbackForm.invalid){
      this.feedbackForm.markAllAsTouched();
      this.snackBar.open('Please fix errors before submitting.','Close', {duration: 3000});
      return;
    }

    const payload = this.feedbackForm.value;
    // TODO: send payload to server (http call) - for now show a success snack
    this.snackBar.open('Thanks! Your feedback was submitted', 'Close', {duration: 3000});
    this.feedbackForm.reset({category: 'general', rating: 5});
  }

  get f() {return this.feedbackForm.controls; }
}
