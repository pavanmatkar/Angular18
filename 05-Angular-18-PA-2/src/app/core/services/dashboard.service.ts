import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //makes it available app-wide
})
export class DashboardService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
  //Replace with your real API endpoint
  constructor(private http: HttpClient) { }
  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
