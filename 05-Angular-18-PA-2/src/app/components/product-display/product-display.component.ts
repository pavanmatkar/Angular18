import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from "@angular/common";
import { FilterByCategoryPipe } from '../../shared/pipes/filter-by-category.pipe';
import { SortByPricePipe } from '../../shared/pipes/sort-by-price.pipe';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, FilterByCategoryPipe, SortByPricePipe],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {
  selectedCategory = 'All';
  sortOrder: 'asc' | 'desc' = 'asc';

  products = [
    {name: 'Laptop', category: 'Electronics', price: 800},
    {name: 'Shirt', category: 'Clothing', price: 40},
    {name: 'Headphones', category: 'Electronics', price: 120},
    {name: 'Jeans', category: 'Clothing', price: 60},
    {name: 'Phone', category: 'Electronics', price: 500},
  ];
}
