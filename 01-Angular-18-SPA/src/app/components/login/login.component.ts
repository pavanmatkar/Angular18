import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  // to use template form we need to import FormsModule
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: ''
  };
  router = inject(Router);

  onLogin(){
    if (this.userObj.username == "admin" && this.userObj.password == "1234") {
      alert("Login Success");
      localStorage.setItem('loginUser', this.userObj.username)
      this.router.navigateByUrl('add-emp')
    } else {
      alert("Wrong Credentials")
    }
  }
}
