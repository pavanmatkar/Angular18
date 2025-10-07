import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }
  getUser(id: number){
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError((error)=>{
        console.error('API Error:',error);
        return throwError(()=> new Error("Failed to fetch user data"))
      })
    )
  }
}
