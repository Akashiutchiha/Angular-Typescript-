import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  // books Data
  books:Book[] = [
    {
      name: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      src: "https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY218_.jpg",
      price: 50
    },
    {
      name: "Clean Code",
      author: "Robert C. Martin",
      src: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg",
      price: 450
    },
    {
      name: "A Programmer's Guide to Computer Science",
      author: "Dr. William M Springer II",
      src: "https://m.media-amazon.com/images/I/61fFh20AhQL._AC_UY218_.jpg",
      price: 200
    },
    {
      name: "A Programmer's Guide to Computer Science",
      author: "Dr. William M Springer II",
      src: "https://m.media-amazon.com/images/I/61fFh20AhQL._AC_UY218_.jpg",
      price: 200
    },
  ]

  // for controlling display of books
  isShowingBooks:boolean = true;

  addtoCart(event:any){
    console.log(event)
  }
}
