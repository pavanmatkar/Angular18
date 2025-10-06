import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { NgFor } from "@angular/common";

interface Product{
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {id: 1, title: 'iPhone 15', price: 79999, imageUrl: 'iPhone15.png'},
      {id: 2, title: 'MacBook Pro', price: 159999, imageUrl: 'MacBookPro.png'},
      {id: 3, title: 'AirPods Pro', price: 24999, imageUrl: 'AirPodsPro.jfif'}
    ];
  }
}
