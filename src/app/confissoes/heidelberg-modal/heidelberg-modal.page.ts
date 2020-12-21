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

  ngOnInit() {
    this.scrollPage(false)
  }
  scrollPage(setLocal?:boolean){
    setLocal ? localStorage.setItem(`heidelberg`,`dia${this.valueOptions}`) : null
    let lastPosition = localStorage.getItem('heidelberg')
    setTimeout(() => {
      this.content.el.scrollToTop()
      const offsetTop = document.getElementById(lastPosition).offsetTop; 
      this.content.el.scrollByPoint(null,offsetTop,1000)
    }, 100);
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
