import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-realtime-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realtime-notifications.component.html',
  styleUrl: './realtime-notifications.component.css',
})
export class RealtimeNotificationsComponent implements OnDestroy {
  messages = signal<string[]>([]);
  running = signal(false);
  private sub?: Subscription;
  private counter = 1;

  toggleNotifications() {
    if (this.running()) {
      this.stop();
    } else {
      this.start();
    }
  }

  private start() {
    this.running.set(true);
    this.sub = interval(3000).subscribe(() => {
      const newMsg = `New chat message #${this
        .counter++} at ${new Date().toLocaleTimeString()}`;
      this.messages.set([newMsg, ...this.messages()]);
    });
  }

  private stop() {
    this.sub?.unsubscribe();
    this.running.set(false);
  }

  ngOnDestroy() {
    this.stop();
  }
}
