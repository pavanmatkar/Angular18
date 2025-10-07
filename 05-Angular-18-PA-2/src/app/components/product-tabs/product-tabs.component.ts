import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-tabs.component.html',
  styleUrl: './product-tabs.component.css'
})
export class ProductTabsComponent {
  activeTab: string = 'info';

  setTab(tab: string){
    this.activeTab = tab;
  }
}
