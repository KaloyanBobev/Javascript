import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheoryComponent } from './theory.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'theory', component: TheoryComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewPagesRoutingModule { }
