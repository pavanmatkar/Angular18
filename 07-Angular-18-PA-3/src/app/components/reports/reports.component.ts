import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
interface Report {
  title: string;
  value: number;
}
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  reports: Report[] = [];
  ngOnInit(): void {
    // Mock data
    this.reports = [
      { title: 'Revenue', value: 12000 },
      { title: 'Users', value: 540 },
      { title: 'Orders', value: 320 },
    ];
  }
}
