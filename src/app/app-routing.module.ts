import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'hinario', 
    loadChildren: './hinario/hinario.module#HinarioPageModule' 
  },
  { path: 'listBiblia', loadChildren: './list-biblia/list-biblia.module#ListBibliaPageModule' },
  { path: 'capitulos', loadChildren: './capitulos/capitulos.module#CapitulosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
