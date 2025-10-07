import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, NgFor } from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  products: any[] = [];
  constructor(private http:HttpClient, private router: Router){}
  ngOnInit(): void {
    this.http.get<any[]>('/api/products').subscribe({
      next: (res) => this.products = res,
      error: () => this.router.navigate(['/login']) // fallback if token invalid
    });
  }
  logout(){
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }
}
