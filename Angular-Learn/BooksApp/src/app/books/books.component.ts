import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(private bookservice: ServicesService){
    console.log("constructor")
  }
  ngOnInit(): void {
    this.books = this.bookservice.getbook();
  }
  // books Data
  books:Book[] = [];

  // for controlling display of books
  isShowingBooks:boolean = true;

  addtoCart(event:any){
    console.log(event)
  }
}
