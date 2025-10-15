import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../shared/interfaces/blog-post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  // Utility function inside the component
  generateSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  posts: BlogPost[] = [
    { id: 1, title: 'How to Code Angular', content: 'Angular tutorial...', slug: this.generateSlug('How to Code Angular') },
    { id: 2, title: 'Understanding RxJS', content: 'RxJS tutorial...', slug: this.generateSlug('Understanding RxJS') },
  ];
}
