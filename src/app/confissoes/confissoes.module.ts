import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfissoesPage } from './confissoes.page';
import { HeidelbergModalPage } from './heidelberg-modal/heidelberg-modal.page';
import { BelgaModalPage } from './belga-modal/belga-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfissoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [
    ConfissoesPage,
    HeidelbergModalPage,
    BelgaModalPage
  ],
  
  entryComponents: [ 
    HeidelbergModalPage,
    BelgaModalPage
  ]
})
export class ConfissoesPageModule {}
