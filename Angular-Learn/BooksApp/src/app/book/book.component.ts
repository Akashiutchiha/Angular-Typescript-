import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  FromChildEvent(){
    console.log("revieved")
    this.bookEmitter.emit(this.book)
  }
}
