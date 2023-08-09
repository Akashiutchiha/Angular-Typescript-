import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{

  constructor(){}
  

  name: string = "Clean Code"
  author: string = "Uncle Bobs"
  src:string = "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg"

  name2: string = "The pragmatic Programmer"
  author2: string = "christian N. honore"
  src2: string = "https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY218_.jpg"

  isDisabled:boolean = false;
  myname: string = ""
  
  handleClick = ()=>{
    console.log("Hello, I've been clicked");
    this.isDisabled = true
  }

  handleInput(event: any){
    this.myname = event.target.value
  }

}
