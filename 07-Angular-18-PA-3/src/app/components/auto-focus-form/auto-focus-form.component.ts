import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-focus-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auto-focus-form.component.html',
  styleUrl: './auto-focus-form.component.css',
})
export class AutoFocusFormComponent implements AfterViewInit {
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  username = '';
  password = '';

  ngAfterViewInit() {
    // Automatically focus on the username field when the component loads
    this.usernameInput.nativeElement.focus();
  }
}
