import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }

  cart: Book[] = [];

  addToCart(book: Book){
    this.cart.push(book)
    console.log(book)
  }

  remove(book: Book){
    this.cart = this.cart.filter((b) => b != book)
  }

  get(){
    return this.cart
  }
}
