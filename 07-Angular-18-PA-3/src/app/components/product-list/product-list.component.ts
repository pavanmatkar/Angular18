import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
// Mock product data
  products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, image: 'https://via.placeholder.com/150x100?text=Phone' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 999, image: 'https://via.placeholder.com/150x100?text=Laptop' },
    { id: 3, name: 'T-Shirt', category: 'clothing', price: 29, image: 'https://via.placeholder.com/150x100?text=T-Shirt' },
    { id: 4, name: 'Sneakers', category: 'clothing', price: 89, image: 'https://via.placeholder.com/150x100?text=Shoes' },
    { id: 5, name: 'Blender', category: 'home', price: 59, image: 'https://via.placeholder.com/150x100?text=Blender' },
    { id: 6, name: 'Headphones', category: 'electronics', price: 199, image: 'https://via.placeholder.com/150x100?text=Headphones' },
  ];

  // Available categories
  categories = ['all', 'electronics', 'clothing', 'home'];

  selectedCategory = 'all';

  // Getter to filter products
  get filteredProducts() {
    if (this.selectedCategory === 'all') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
