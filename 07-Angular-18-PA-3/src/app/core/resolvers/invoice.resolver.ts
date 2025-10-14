import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Invoice {
  id: number;
  customer: string;
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class InvoiceResolver implements Resolve<Invoice> {
  resolve(route: ActivatedRouteSnapshot): Observable<Invoice> {
    const idParam = route.paramMap.get('id'); // ✅ safer than route.params
    const invoiceId = idParam ? +idParam : 0; // fallback to 0 if null
    
    // Simulate API call
    return of({ 
      id: +invoiceId, 
      customer: 'John Doe', 
      amount: 123.45, 
    }).pipe(delay(2000));
  }
}
