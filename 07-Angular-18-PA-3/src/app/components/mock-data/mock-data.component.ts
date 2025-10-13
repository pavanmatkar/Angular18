import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-mock-data',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './mock-data.component.html',
  styleUrl: './mock-data.component.css'
})
export class MockDataComponent implements OnInit{
  data$: Observable<string[]> | undefined;

  ngOnInit(): void {
    //Simulate API call with 2 seconds delay
    const mockData = ['Video 1', 'Video 2', 'Video 3', 'Video 4'];
    this.data$ = of(mockData).pipe(delay(2000));
  }
}
