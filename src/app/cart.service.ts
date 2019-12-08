import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(item) {
    this.items.push(item);
  }

  getCartCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  removeItem(itemIndex) {
    this.items = this.items.splice(itemIndex, 1);
  }
}
