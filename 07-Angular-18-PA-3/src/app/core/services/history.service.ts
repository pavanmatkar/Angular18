import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private history: string[] = [];
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.addToHistory(event.urlAfterRedirects);
      });
  }

  private addToHistory(url: string) {
    this.history.unshift(url);
    if (this.history.length > 5) {
      this.history.pop(); // keep only last 5
    }
  }

  getHistory(): string[] {
    return this.history;
  }
}
