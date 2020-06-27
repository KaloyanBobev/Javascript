import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: ` `, redirectTo: `pages`, pathMatch: `full` },
  { path: `pages`, loadChildren: `./view-pages/view-pages.module#ViewPagesModule` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), { preloadingPages: PreloadAllModules }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
