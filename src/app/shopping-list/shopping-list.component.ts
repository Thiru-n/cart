import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList;

  constructor(
    private shoppingListService: ShoppingListService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getShippingList();
  }

  addToCart(item) {
    console.log(item);
    this.cartService.addToCart(item);
  }
}
