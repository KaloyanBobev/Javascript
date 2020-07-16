import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheoryComponent } from './theory/theory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PerimeterComponent } from './perimeter/perimeter.component';
import { AreaComponent } from './area/area.component';
import { MathsQuizComponent } from './maths-quiz/maths-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    TheoryComponent,
    PageNotFoundComponent,
    PerimeterComponent,
    AreaComponent,
    MathsQuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
