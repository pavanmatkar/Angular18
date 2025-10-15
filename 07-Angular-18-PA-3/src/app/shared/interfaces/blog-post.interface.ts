export class BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string; // URL-friendly version of the title

  constructor(id: number, title: string, content: string, slug: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.slug = slug;
  }
}
