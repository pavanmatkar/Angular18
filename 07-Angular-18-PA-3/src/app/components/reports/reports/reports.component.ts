import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reports = [
    { id: 1, title: 'Monthly Sales', description: 'Summary of monthly sales.', status: 'Completed' },
    { id: 2, title: 'Customer Feedback', description: 'Survey results from customers.', status: 'Pending' },
    { id: 3, title: 'Inventory Report', description: 'Current stock status of products.', status: 'Completed' },
  ];
}
