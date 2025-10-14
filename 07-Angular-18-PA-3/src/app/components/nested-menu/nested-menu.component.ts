import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  subcategories?: MenuItem[];
}

@Component({
  selector: 'app-nested-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nested-menu.component.html',
  styleUrl: './nested-menu.component.css',
})
export class NestedMenuComponent {
  categories: MenuItem[] = [
    {
      name: 'Electronics',
      subcategories: [
        {
          name: 'Phones',
          subcategories: [{ name: 'Smartphones' }, { name: 'Feature Phones' }],
        },
        {
          name: 'Laptops',
          subcategories: [{ name: 'Gaming Laptops' }, { name: 'Ultrabooks' }],
        },
      ],
    },
    { name: 'Fashion', subcategories: [{ name: 'Men' }, { name: 'Women' }] },
    {
      name: 'Home & Kitchen',
      subcategories: [{ name: 'Appliances' }, { name: 'Furniture' }],
    },
  ];

  expanded = new Set<MenuItem>();

  toggle(item: MenuItem) {
    if (this.expanded.has(item)) {
      this.expanded.delete(item);
    } else {
      this.expanded.add(item);
    }
  }
}
