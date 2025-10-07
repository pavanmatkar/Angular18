import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  constructor(private router: Router) {}
  goToAdmin() {
    // Simulate admin login
    this.router.navigate(['/admin-dashboard1']);
  }
}