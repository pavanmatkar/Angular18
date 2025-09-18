import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
isLoggedIn : boolean = false;
}
