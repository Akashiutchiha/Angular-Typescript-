import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  getbook(){
    return [
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
  }
  constructor() { }
}
