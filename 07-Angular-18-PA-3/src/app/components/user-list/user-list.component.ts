import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [];

  constructor() {
    // Generate 1000 users
    for (let i = 1; i <= 1000; i++) {
      this.users.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
      });
    }
  }

  // ✅ trackBy function to improve performance
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}
