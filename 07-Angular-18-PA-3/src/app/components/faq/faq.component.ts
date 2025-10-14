import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FAQItem[] = [
    { question: 'How do I reset my password?', answer: 'Click "Forgot password" on login page and follow instructions.', open: false },
    { question: 'Where can I view my invoices?', answer: 'Go to your dashboard and click "Invoices".', open: false },
    { question: 'How do I contact support?', answer: 'Send an email to support@example.com.', open: false },
    { question: 'Can I change my subscription plan?', answer: 'Yes, go to settings → subscription → change plan.', open: false },
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
