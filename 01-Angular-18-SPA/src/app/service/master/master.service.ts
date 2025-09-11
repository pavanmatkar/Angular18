import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  getwithParam<T>(url: string, params: any): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params });
    const httpOptions = {
      params: httpParams,
    };
    return this.http.get<T>(url, httpOptions);
  }
  post<T>(URL: string, body: any): Observable<T> {
    return this.http.post<T>(URL, body);
  }
  put<T>(URL: string, body: any): Observable<T> {
    return this.http.put<T>(URL, body);
  }
  delete<T>(URL: string): Observable<T> {
    return this.http.delete<T>(URL);
  }

  getJsonUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap(userList => {
        debugger;
      }),
      map((userList: any) =>
        userList.map((user: any) => {
          return { id: user.id, name: user.name };
        })
      )
    );
  }

  getSingleUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData:any)=> userData.address)
    );
  }

}
