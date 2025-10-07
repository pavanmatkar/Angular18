import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BlogPost{
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; //fake REST API
  constructor(private http: HttpClient) { }
  getPosts(): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(this.apiUrl);
  }
}
