import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  template: `
    <h5>Que 7] Lazy Load Reports when clicked</h5>
    <h2>Dashboard</h2>
    <p>Click to load Reports:</p>
    <button mat-raised-button color="primary" [routerLink]="['/reports']">
      Load Reports
    </button>
  `,
  styleUrl: './home2.component.css',
})
export class Home2Component {}
