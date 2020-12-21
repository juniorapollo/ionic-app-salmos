import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CredosModalPage } from './credos-modal/credos-modal.page';

@Component({
  selector: 'app-credos',
  templateUrl: './credos.page.html',
  styleUrls: ['./credos.page.scss'],
})
export class CredosPage implements OnInit {
  modals:any =[
    {
      page: CredosModalPage,
      nome: 'Credo Apostólico',
      author:'Apóstolos de Cristo',
      avatar:'./assets/img/capa_heidelber.jpeg'
    }
  ];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal( page ) {
    const modal = await this.modalCtrl.create({
      component: page
    });
    return await modal.present();
  }

}
