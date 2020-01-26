import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-belga-modal',
  templateUrl: './belga-modal.page.html',
  styleUrls: ['./belga-modal.page.scss'],
})
export class BelgaModalPage implements OnInit {
  @ViewChild(IonContent) content: any;

  valueOptions:number=0;

  customActionSheetOptions: any = {
    header: 'Selecione...',
    translucent: true
   };

  constructor(public modalController:ModalController) { }

 
  ngOnInit() {
    
  }
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
