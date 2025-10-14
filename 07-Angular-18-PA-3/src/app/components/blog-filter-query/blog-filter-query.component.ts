import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface BlogPost {
  title: string;
  author: string;
  category: string;
}
@Component({
  selector: 'app-blog-filter-query',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-filter-query.component.html',
  styleUrl: './blog-filter-query.component.css',
})
export class BlogFilterQueryComponent {
  private route = inject(ActivatedRoute);

  posts: BlogPost[] = [
    { title: 'Angular Tips', author: 'John', category: 'Tech' },
    { title: 'Traveling Japan', author: 'Alice', category: 'Travel' },
    { title: 'RxJS Mastery', author: 'John', category: 'Tech' },
    { title: 'Backpacking Europe', author: 'Alice', category: 'Travel' },
  ];

  queryParams = signal<{ author?: string; category?: string }>({});

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.queryParams.set(params);
    });
  }

  filteredPosts = computed(() => {
    const { author, category } = this.queryParams();
    return this.posts.filter(
      (post) =>
        (!author || post.author === author) &&
        (!category || post.category === category)
    );
  });

  setQuery(key: string, value: string) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);

    // Convert searchParams to a plain object (type-safe)
    const paramsObj: Record<string, string> = {};
    url.searchParams.forEach((v, k) => (paramsObj[k] = v));
    this.queryParams.set(paramsObj);
  }

  clearQuery() {
    const url = new URL(window.location.href);
    url.search = '';
    window.history.pushState({}, '', url);
    this.queryParams.set({});
  }
}
