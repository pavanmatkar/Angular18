import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  slug!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      // Fetch post content by slug here (API or local array)
    });
  }
}
