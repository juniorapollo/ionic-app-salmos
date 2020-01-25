import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeidelbergModalPage } from './heidelberg-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HeidelbergModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeidelbergModalPage]
})
export class HeidelbergModalPageModule {}
