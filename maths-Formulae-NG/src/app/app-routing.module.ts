import { MathsQuizComponent } from './maths-quiz/maths-quiz.component';
import { AreaComponent } from './area/area.component';
import { PerimeterComponent } from './perimeter/perimeter.component';
import { TheoryComponent } from './theory/theory.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'theory', pathMatch: 'full' },
  { path: 'theory', component: TheoryComponent },
  { path: 'perimeter', component: PerimeterComponent },
  { path: 'area', component: AreaComponent },
  { path: 'quiz', component: MathsQuizComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
