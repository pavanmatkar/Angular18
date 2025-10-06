import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-phones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-phones.component.html',
  styleUrl: './dynamic-phones.component.css'
})
export class DynamicPhonesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      phones: this.fb.array([
        this.fb.control('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)])
      ])
    });
  }

  // Getter for easy access in template
  get phones(): FormArray{
    return this.form.get('phones') as FormArray;
  }

  addPhone(){
    this.phones.push(this.fb.control('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]));
  }

  removePhone(index: number){
    this.phones.removeAt(index);
  }

  submit(){
    if(this.form.valid){
      console.log('Phone numbers:', this.form.value.phones);
    } else{
      console.log('Invalid numbers')
    }
  }
}
