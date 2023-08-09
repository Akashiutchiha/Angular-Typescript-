import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/Book';
import { Output, EventEmitter } from '@angular/core';
import { Outlet } from 'react-router-dom';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book = {} as Book;
  // @Output() Bookemitor = new EventEmitter<Book>();
 
  // addToCart(){
  //   this.Bookemitor.emit(this.book)
  // }
}
