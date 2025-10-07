import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
