import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InvoiceService {

  getInvoiceById(id: string) {
    // simulate API latency (2 seconds)
    const invoice = {
      id,
      customer: 'John Doe',
      amount: 1250.5,
      date: '2025-10-14',
      status: 'Paid',
    };
    return of(invoice).pipe(delay(2000));
  }

}
