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
      title: 'Credo Apostólico',
      name: 'apostolico',
      author:'Apóstolos de Cristo',
      avatar:'./assets/img/credo_apostolico.jpg'
    },
    {
      page: CredosModalPage,
      title: 'Credo Niceno',
      name: 'niceno',
      author:'',
      avatar:'./assets/img/credo_niceno.jpg'
    },
    {
      page: CredosModalPage,
      title: 'Credo Atanasiano',
      name: 'atanasiano',
      author:'',
      avatar:'./assets/img/credo_atanasiano.jpg'
    }
  ];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal( modal:any ) {

    const modalCredo = await this.modalCtrl.create({
      component: modal.page,
      componentProps:[
        {
          name: modal.name,
          title: modal.title
        }
      ]
    });
    return await modalCredo.present();
  }

}
