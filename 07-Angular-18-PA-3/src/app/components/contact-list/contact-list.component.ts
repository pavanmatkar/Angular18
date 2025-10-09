import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, ConfirmDialogComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css' 
})
export class ContactListComponent {
  contacts = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  constructor(private dialog: MatDialog) {}

  confirmDelete(contact: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete ${contact.name}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // user clicked Delete
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
      }
    });
  }
}

