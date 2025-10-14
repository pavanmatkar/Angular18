import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { catchError, delay, of, throwError } from 'rxjs';

@Component({
  selector: 'app-mock-service-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mock-service-error.component.html',
  styleUrl: './mock-service-error.component.css',
})
export class MockServiceErrorComponent {
  data = signal<string[]>([]);
  errorMessage = signal('');
  loading = signal(false);

  loadData() {
    this.loading.set(true);
    this.errorMessage.set('');
    this.data.set([]);

    // Mock service: 50% chance of failure
    const mockService$ =
      Math.random() > 0.5
        ? of(['Item 1', 'Item 2', 'Item 3']).pipe(delay(1000))
        : throwError(() => new Error('Service failed')).pipe(delay(1000));

    mockService$
      .pipe(
        catchError((err) => {
          this.errorMessage.set('Failed to load data');
          return of([]);
        })
      )
      .subscribe((result) => {
        this.data.set(result);
        this.loading.set(false);
      });
  }
}
