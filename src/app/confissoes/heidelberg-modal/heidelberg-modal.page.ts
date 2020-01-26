import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-heidelberg-modal',
  templateUrl: './heidelberg-modal.page.html',
  styleUrls: ['./heidelberg-modal.page.scss'],
})
export class HeidelbergModalPage implements OnInit{
  @ViewChild(IonContent) content: any;

  valueOptions:number=0;
  list:any;
  

  constructor(public modalController:ModalController) { }
  
  customActionSheetOptions: any = {
    header: 'Selecione...',
    translucent: true
   };

  ngOnInit(){}

  scrollPage(){
    this.content.el.scrollToTop()
    const offsetTop = document.getElementById("dia"+this.valueOptions).offsetTop; 
    this.content.el.scrollByPoint(null,offsetTop,1000)
  }
  closeModal(){
    this.modalController.dismiss()
  }

  arrayForLoop(n: number): any[] {
    return Array(n);
  }

  logScrollStart(){}

  logScrollEnd(){}

  
}
