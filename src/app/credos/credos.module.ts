import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CredosPage } from './credos.page';
import { CredosModalPage } from './credos-modal/credos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CredosPage
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
    CredosPage, 
    CredosModalPage
  ],

  entryComponents: [ 
    CredosModalPage,
  ]
  

})
export class CredosPageModule {}
