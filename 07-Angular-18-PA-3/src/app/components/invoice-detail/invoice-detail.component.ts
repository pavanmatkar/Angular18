import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Invoice } from '../../core/resolvers/invoice.resolver';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css',
})
export class InvoiceDetailComponent {
  invoice: Invoice | null = null;

  constructor(private route: ActivatedRoute) {
    // Get resolved data
    this.route.data.subscribe((data) => {
      this.invoice = data['invoice'];
    });
  }
}