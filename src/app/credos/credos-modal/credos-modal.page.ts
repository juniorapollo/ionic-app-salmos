import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-credos-modal',
  templateUrl: './credos-modal.page.html',
  styleUrls: ['./credos-modal.page.scss'],
})
export class CredosModalPage implements OnInit {
  @ViewChild(IonContent) content: any;

  valueOptions:number=0;

  customActionSheetOptions: any = {
    header: 'Selecione...',
    translucent: true
   };

  constructor(public modalController:ModalController) { }

 
  ngOnInit() {
    this.scrollPage(false)
  }
  scrollPage(setLocal?:boolean){
    setLocal ? localStorage.setItem(`credos`,`artigo${this.valueOptions}`) : null
    let lastPosition = localStorage.getItem('credos')
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
    let indice = [
      'Artigo 1 - O único Deus',
      'Artigo 2 – Como conhecemos a Deus',
      'Artigo 3 – A Palavra de Deus',
      'Artigo 4 – Os livros canônicos',
      'Artigo 5 – A autoridade da Sagrada Escritura',
      'Artigo 6 – A diferença entre os livros canônicos e apócrifos',
      'Artigo 7 – A Sagrada Escritura: perfeita e completa',
      'Artigo 8 – A trindade: um só Deus, três pessoas',
      'Artigo 9 – O testemunho da Escritura sobre a trindade',
      'Artigo 10 – Jesus Cristo é Deus',
      'Artigo 11 – O Espírito Santo é Deus',
      'Artigo 12 – A criação do mundo e dos anjos',
      'Artigo 13 – A providência de Deus',
      'Artigo 14 – A criação do homem, sua queda e sua incapacidade de fazer o bem',
      'Artigo 15 – O pecado original',
      'Artigo 16 – Eleição eterna por Deus',
      'Artigo 17 – O Salvador prometido por Deus',
      'Artigo 18 – A encarnação do Filho de Deus',
      'Artigo 19 – As duas naturezas de Cristo',
      'Artigo 20 – A Justiça e a misericórdia de Deus em Cristo',
      'Artigo 21 – A satisfação por Cristo',
      'Artigo 22 – A justificação pela fé em Cristo',
      'Artigo 23 – Nossa justiça perante Deus em Cristo',
      'Artigo 24 – A santificação',
      'Artigo 25 – Cristo, o cumprimento da lei',
      'Artigo 26 – Cristo, nosso único Advogado',
      'Artigo 27 – A Igreja Católica ou Universal',
      'Artigo 28 – O dever de juntar se à igreja',
      'Artigo 29 – As marcas da verdadeira igreja, de seus membros e da falsa igreja',
      'Artigo 30 – O governo da igreja',
      'Artigo 31 – Os ofícios na igreja',
      'Artigo 32 – A ordem e a disciplina da igreja',
      'Artigo 33 – Os sacramentos',
      'Artigo 34 – O Santo Batismo',
      'Artigo 35 – A Santa Ceia',
      'Artigo 36 – O ofício das autoridades civis',
      'Artigo 37 – O juízo final'
    ]
    return indice
  }

  logScrollStart(){

  }

  async logScrollEnd(){
  }

  
 
}
