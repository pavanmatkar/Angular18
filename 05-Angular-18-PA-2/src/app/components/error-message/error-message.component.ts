import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../core/services/error.service';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [NgIf],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent implements OnInit{
  userData: any;
  loading = true;
  errorMessage: string | null = null;

  constructor(private errorService: ErrorService){}
  ngOnInit(): void {
    this.errorService.getUser(1).subscribe({
      next: (data) => {
        this.userData = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Unable to load user data. Please try again later."
        this.loading = false;
        alert(this.errorMessage);
      }
    });
  }
}
