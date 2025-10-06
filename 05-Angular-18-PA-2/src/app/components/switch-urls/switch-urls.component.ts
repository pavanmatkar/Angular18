import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { NgIf, CommonModule } from "@angular/common";

@Component({
  selector: 'app-switch-urls',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './switch-urls.component.html',
  styleUrl: './switch-urls.component.css'
})
export class SwitchUrlsComponent implements OnInit{
  authors: any[] = [];
  loading = false;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  fetchAuthors(){
    this.loading = true;
    this.apiService.getAuthors().subscribe({
      next: (res) => {
        this.authors = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.loading = false;
      }
    });
  }
}
