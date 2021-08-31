import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HeidelbergModalPage } from './heidelberg-modal/heidelberg-modal.page' 
import { BelgaModalPage } from './belga-modal/belga-modal.page';

@Component({
  selector: 'app-confissoes',
  templateUrl: './confissoes.page.html',
  styleUrls: ['./confissoes.page.scss'],
})

export class ConfissoesPage implements OnInit {

  modals:any =[
    {
      page: BelgaModalPage,
      nome: 'Confissão Belga ( 1561 )',
      author:'Guido de Brès',
      avatar:'./assets/img/capa_belga.jpeg'

    },

    {
      page: HeidelbergModalPage,
      nome: 'Catecismo de Heidelberg ( 1563 )',
      author:'Zacarias Ursino & Gaspar Oleviano',
      avatar:'./assets/img/capa_heidelber.jpeg'
    },
   
    {
      page: HeidelbergModalPage,
      nome: 'Canones de Dort ( 1619 )',
      author:'',
      avatar:'./assets/img/capa_dort.jpeg',
      disabled: true
    },
  ];


  constructor(public navCtrl: NavController,public modalCtrl : ModalController) { }

  ngOnInit() {
  
  }

  async openModal( page ) {
    const modal = await this.modalCtrl.create({
      component: page
    });
    return await modal.present();
  }

  

}
