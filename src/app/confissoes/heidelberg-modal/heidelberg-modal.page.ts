import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-heidelberg-modal',
  templateUrl: './heidelberg-modal.page.html',
  styleUrls: ['./heidelberg-modal.page.scss'],
})
export class HeidelbergModalPage{

  constructor(public modalController:ModalController) { }

  closeModal(){
    this.modalController.dismiss()
  }




}
