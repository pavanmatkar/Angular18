import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-bell.component.html',
  styleUrl: './notification-bell.component.css'
})
export class NotificationBellComponent {
  // reactive signal for unread messages
  unreadCount = signal(3);

  // simulate receiving a new notification
  addNotification() {
    this.unreadCount.update(count => count + 1);
  }

  // mark all as read
  clearNotifications() {
    this.unreadCount.set(0);
  }
}
