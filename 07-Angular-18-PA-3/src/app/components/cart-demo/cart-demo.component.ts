import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CartService, Product } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-demo',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './cart-demo.component.html',
  styleUrl: './cart-demo.component.css'
})
export class CartDemoComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Headphones', price: 150 },
    { id: 3, name: 'Keyboard', price: 80 },
  ];

  constructor(public cart: CartService) {}

  addToCart(product: Product) {
    this.cart.addProduct(product, 1);
  }

  removeFromCart(productId: number) {
    this.cart.removeProduct(productId);
  }

  updateQty(productId: number, qty: number) {
    this.cart.updateQuantity(productId, qty);
  }

}
