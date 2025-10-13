import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-unsaved-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './unsaved-form.component.html',
  styleUrl: './unsaved-form.component.css'
})
export class UnsavedFormComponent {
  form: FormGroup;
  isSaved = false;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: [''],
      message: ['']
    })
  }

  save(){
    this.isSaved = true;
    alert('Form saved successfully!');
  }

  // called by the guard
  hasUnsavedChanges(): boolean{
    return this.form.dirty && !this.isSaved;
  }
}
