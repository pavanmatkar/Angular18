import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
isDivVisible:boolean = true;
toggleDiv(){
  this.isDivVisible = !this.isDivVisible;
}
}
