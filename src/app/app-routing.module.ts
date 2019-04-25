import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//   { path: '**', redirectTo: 'menu'},
const routes: Routes = [

  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'menu2', loadChildren: './pages2/menu2/menu2.module#Menu2PageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
