import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{
  messages$: Observable<string[]> | undefined;

  constructor(){}

  ngOnInit(): void {
    // Mock API messages
    const mockMessages = [
      'Hello Pavan! 👋',
      'How are you today?',
      'Don’t forget the meeting at 3 PM.',
      '🎉 Happy Birthday again!'
    ];

    //Simulate API delay of 1 second
    this.messages$ = of(mockMessages).pipe(delay(3000));
  }
}
