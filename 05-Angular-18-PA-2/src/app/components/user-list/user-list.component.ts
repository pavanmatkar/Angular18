import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  allUsers: any[] = [];
  users: any[] = [];

  currentPage = 1;
  pageSize = 10;
  totalUsers = 0;
  totalPages = 0;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.allUsers = data;
        this.totalUsers = data.length;
        this.totalPages = Math.ceil(this.totalUsers / this.pageSize);
        this.setPage(1);
      },
      error: (err) => {
        console.error('Error fetching users', err);
      }
    });
  }

  private setPage(page: number){
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = page * this.pageSize;
    this.users = this.allUsers.slice(start, end);
  }

  nextPage(): void{
    if (this.currentPage < this.totalPages){
      this.setPage(this.currentPage + 1);
    }
  }

  prevPage(): void{
    if(this.currentPage > 1){
      this.setPage(this.currentPage - 1);
    }
  }
}
