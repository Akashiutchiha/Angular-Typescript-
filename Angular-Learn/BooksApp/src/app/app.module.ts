import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

@NgModule({
    declarations: [AppComponent, BooksComponent, BookComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule]
})
export class AppModule{

}