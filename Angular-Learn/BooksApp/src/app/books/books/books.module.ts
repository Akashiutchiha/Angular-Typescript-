import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books.component';
import { BookComponent } from 'src/app/books/book/book.component';
import { CartService } from 'src/app/services/cart.service';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [CartService],
  imports: [
     CommonModule
  ],
  exports: [BooksComponent]
  
})
export class BooksModule { }
