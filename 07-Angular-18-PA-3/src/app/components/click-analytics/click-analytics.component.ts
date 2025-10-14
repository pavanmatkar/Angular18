import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface UserAction {
  action: string;
  timestamp: Date;
}

@Component({
  selector: 'app-click-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './click-analytics.component.html',
  styleUrl: './click-analytics.component.css',
})
export class ClickAnalyticsComponent {
  actions = signal<UserAction[]>([]);

  logAction(actionName: string) {
    const newAction: UserAction = { action: actionName, timestamp: new Date() };
    this.actions.set([...this.actions(), newAction]);
    console.log('Action logged:', newAction);
  }
}
