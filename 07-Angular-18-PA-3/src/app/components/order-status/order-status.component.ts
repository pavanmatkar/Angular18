import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Order {
  id: number;
  customer: string;
  status: 'Delivered' | 'Pending' | 'Shipped';
}

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css',
})
export class OrderStatusComponent {
  orders: Order[] = [
    { id: 1, customer: 'Alice', status: 'Delivered' },
    { id: 2, customer: 'Bob', status: 'Pending' },
    { id: 3, customer: 'Charlie', status: 'Shipped' },
    { id: 4, customer: 'David', status: 'Delivered' },
  ];

  getStatusColor(status: Order['status']): string {
    switch (status) {
      case 'Delivered':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Shipped':
        return 'blue';
      default:
        return 'black';
    }
  }

  getStatusIcon(status: Order['status']): string {
    switch (status) {
      case 'Delivered':
        return '🚚';
      case 'Pending':
        return '🧙';
      case 'Shipped':
        return '🔵';
      default:
        return '';
    }
  }
}
