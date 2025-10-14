import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryService } from '../../core/services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
   pages: string[] = [];

  constructor(private historyService: HistoryService) {
    this.pages = this.historyService.getHistory();
  }
}
