import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-belga-modal',
  templateUrl: './belga-modal.page.html',
  styleUrls: ['./belga-modal.page.scss'],
})
export class BelgaModalPage implements OnInit {

  constructor(public modalController:ModalController) { }

 
  ngOnInit() {
    
  }


  closeModal(){
    this.modalController.dismiss()
  }
 
}
