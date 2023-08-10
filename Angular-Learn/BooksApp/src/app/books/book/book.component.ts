import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Book } from '../../interfaces/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private CartService: CartService){}
  isInCart: Boolean = false

  @Input() book:Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  FromChildEvent(){
    // this.bookEmitter.emit(this.book)
    this.CartService.addToCart(this.book)
    this.isInCart = !this.isInCart
  }

  removeFromCart(){
    this.isInCart = !this.isInCart
    this.CartService.remove(this.book)
  }
}
