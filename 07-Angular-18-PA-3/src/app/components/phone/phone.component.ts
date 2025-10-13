import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneFormatPipe } from '../../shared/pipes/phone-format.pipe';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule, PhoneFormatPipe],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {

}
