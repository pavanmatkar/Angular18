import { computed, Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  // Reactive cart items
  private _items = signal<CartItem[]>([]);

  // Computed signals for cart totals
  items = this._items.asReadonly();
  totalQuantity = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));
  totalPrice = computed(() => this._items().reduce((sum, item) => sum + item.quantity * item.price, 0));

  // Add product to cart
  addProduct(product: Product, quantity: number = 1) {
    const existing = this._items().find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      this._items.update(items => [...items]); // trigger signal update
    } else {
      this._items.update(items => [...items, { ...product, quantity }]);
    }
  }

  // Remove product from cart
  removeProduct(productId: number) {
    this._items.update(items => items.filter(item => item.id !== productId));
  }

  // Update quantity
  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) return this.removeProduct(productId);
    const existing = this._items().find(item => item.id === productId);
    if (existing) {
      existing.quantity = quantity;
      this._items.update(items => [...items]); // trigger signal update
    }
  }

  // Clear cart
  clearCart() {
    this._items.set([]);
  }

}
