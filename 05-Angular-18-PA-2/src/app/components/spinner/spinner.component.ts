import { Component, OnInit } from '@angular/core';
import { NgIf, CommonModule } from "@angular/common";
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit{
  data: any[] = [];
  loading = false;

  constructor(private dashboardService: DashboardService){}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.loading = true; // show spinner
    this.dashboardService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false; // hide spinner
      },
      error: (err) => {
        console.error('Error fetching data', err);
        this.loading = false; // hide spinner even if error occurs
      }
    });
  }
}
