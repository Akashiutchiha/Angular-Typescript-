import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books.component';
import { ServicesService } from '../services.service';
import { BookComponent } from 'src/app/books/book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
     CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
