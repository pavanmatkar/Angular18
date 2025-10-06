import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
posts: BlogPost[] = [];
loading = true;

constructor(private blogService: BlogService){}
ngOnInit(): void {
  this.blogService.getPosts().subscribe({
    next: (data) => {
      this.posts = data;
      this.loading = false;
    },
    error: (err) => {
      console.error('Error fetching posts:', err);
      this.loading = false;
    }
  });
}
}
