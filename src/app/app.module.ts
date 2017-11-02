import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService} from './authors/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [ CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
