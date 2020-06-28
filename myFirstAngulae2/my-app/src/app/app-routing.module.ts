import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: ` `, redirectTo: `pages`, pathMatch: `full` },
  { path: `pages`, loadChildren: `./view-pages/view-pages.module#ViewPagesModule` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
