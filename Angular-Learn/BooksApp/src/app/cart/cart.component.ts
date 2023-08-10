import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private CartServices: CartService){}
  // carts: Book[] = this.CartServices.cart
  getCart(): Book[]{
    return this.CartServices.get()
  }
}
