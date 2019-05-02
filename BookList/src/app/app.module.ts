import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDirective } from './book.directive';
import { BookfilterPipe } from './bookfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookDirective,
    BookfilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
