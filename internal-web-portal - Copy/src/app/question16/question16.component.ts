import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question16',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question16.component.html',
  styleUrl: './question16.component.css',
})
export class Question16Component {
  trackByUser(index: number, user: any): number {
    return user.id;
  }
  userList: any[] = [
    { name: 'AAA', id: 123, location: 'Mumbai', salary: '11k' },
    { name: 'BBB', id: 456, location: 'Delhi', salary: '12k' },
    { name: 'CCC', id: 789, location: 'Kolkata', salary: '13k' },
    { name: 'DDD', id: 987, location: 'Guwahati', salary: '14k' },
    { name: 'EEE', id: 654, location: 'Shillong', salary: '15k' },
    { name: 'FFF', id: 321, location: 'Bengaluru', salary: '16k' },
    { name: 'AAA', id: 123, location: 'Mumbai', salary: '11k' },
    { name: 'BBB', id: 456, location: 'Delhi', salary: '12k' },
    { name: 'CCC', id: 789, location: 'Kolkata', salary: '13k' },
    { name: 'DDD', id: 987, location: 'Guwahati', salary: '14k' },
    { name: 'EEE', id: 654, location: 'Shillong', salary: '15k' },
    { name: 'FFF', id: 321, location: 'Bengaluru', salary: '16k' },
  ];

  shuffle() {
    this.userList = [...this.userList].reverse();
  }
}
