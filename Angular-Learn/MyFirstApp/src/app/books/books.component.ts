import { Component, HostListener, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
Singlebook: any;

  constructor(){}
  
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

  Cart:Book[] = [];
  
  isDisabled:boolean = false;
  myname: string = ""
  
  handleClick = ()=>{
    console.log("Hello, I've been clicked");
    this.isDisabled = true
  }

  handleInput(event: any){
    this.myname = event.target.value
  }

  isShowingBooks: boolean = true;

}
