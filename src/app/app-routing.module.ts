import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
  },
  {
    path: 'hinario',
    loadChildren: './hinario/hinario.module#HinarioPageModule'
  },
  { path: 'listBiblia', loadChildren: './list-biblia/list-biblia.module#ListBibliaPageModule' },
  { path: 'capitulos', loadChildren: './capitulos/capitulos.module#CapitulosPageModule' },
  { path: 'confissoes', loadChildren: './confissoes/confissoes.module#ConfissoesPageModule' },
  { path: 'heidelberg-modal', loadChildren: './confissoes/heidelberg-modal/heidelberg-modal.module#HeidelbergModalPageModule' },
  { path: 'belga-modal', loadChildren: './confissoes/belga-modal/belga-modal.module#BelgaModalPageModule' },
  { path: 'credos', loadChildren: './credos/credos.module#CredosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
