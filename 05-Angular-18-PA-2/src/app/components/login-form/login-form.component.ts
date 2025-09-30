import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  studentObj: any = {
    email: '',
    password: '',
  };

  onSubmit(form: any){
    if (form.valid){
      alert('Login successful!');
      console.log(this.studentObj);
    } else {
      alert('Form is invalid!')
    }
  }
}
