import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-credos-modal',
  templateUrl: './credos-modal.page.html',
  styleUrls: ['./credos-modal.page.scss'],
})
export class CredosModalPage implements OnInit {
  @ViewChild(IonContent) content: any;

  constructor(public modalController:ModalController, public navParams: NavParams) { }
  credoHtml = ``
  title=``
 
  ngOnInit() {
    this.title = this.navParams.data[0].title
    const name  = this.navParams.data[0].name
    
    let htmlApostolico=`<div class="swiper-zoom-container">
                  <ion-row>
                    <ion-col class="ion-text-justify" size="12">
                      <div>
                          <p>1. Creio em Deus Pai Todo-poderoso, o Criador dos Céus e da terra.</p>
                          <p>2. E em Jesus Cristo, seu Filho Unigênito, o nosso Senhor;</p>
                          <p>3. que foi concebido pelo Espírito Santo, nasceu da virgem Maria;</p>
                          <p>4. padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado;</p>
                          <p>5. desceu ao inferno, e ao terceiro dia ressurgiu dos mortos;</p>
                          <p>6. subiu ao céu e está assentado a direita de Deus Pai Todo-poderoso;</p>
                          <p>7. de onde há de vir a julgar os vivos e os mortos.</p>
                          <p>8. Creio no Espírito Santo;</p>
                          <p>9. na santa Igreja católica, na comunhão dos santos;</p>
                          <p>10. na remissão dos pecados;</p>
                          <p>11. na ressurreição do corpo</p>
                          <p>12. e na vida eterna. Amém.</p>
                      </div>
                    </ion-col>
                  </ion-row>
                </div>`

    let htmlNiceno=`<div class="swiper-zoom-container">
          <ion-row>
            <ion-col class="ion-text-justify" size="12">
              <div>
                  <p>I. Cremos em um só Deus, Pai Todo-poderoso, Criador do céu e da terra, de todas as coisas visíveis e invisíveis.</p>
                  <p>II. Cremos em um só Senhor Jesus Cristo, o Filho Unigênito de Deus, nascido do Pai antes de todos os séculos, Deus de Deus, Luz de Luz, Deus verdadeiro de Deus verdadeiro; gerado, não criado, de igual substância do Pai; por Ele todas as coisas foram feitas. Por nós, homens, e por nossa salvação, Ele desceu do céu e se fez carne, pelo Espírito Santo, da virgem Maria, e se tornou Homem. Também por nós, padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e foi sepultado. Ressurgiu no terceiro dia, conforme as Escrituras. Subiu ao céu, está sentado à direita do Pai e de novo há de vir, com glória, para julgar os vivos e os mortos, e seu reino não terá fim.</p>
                  <p>III. Cremos no Espírito Santo, Senhor e vivificador, que procede do Pai e do Filho, e com o Pai e o Filho é adorado e glorificado; que falou através dos profetas. E numa só igreja, santa, católica e apostólica. Confessamos um só batismo para remissão dos pecados. Esperamos a ressurreição dos mortos e a vida do século vindouro. Amém.</p>
              </div>
            </ion-col>
          </ion-row>
        </div>`

        let htmlAtanasiano=`<div class="swiper-zoom-container">
        <ion-row>
          <ion-col class="ion-text-justify" size="12">
            <div>
            <p>1. Todo aquele que quiser ser salvo, é necessário acima de tudo, que sustente a fé católica.</p>
            <p>2. A qual, a menos que cada um preserve, perfeita e inviolável, certamente perecerá para sempre.</p>
            <p>3. Mas a fé católica é esta, que adoremos um único Deus em Trindade, e a Trindade em unidade.</p>
            <p>4. Não confundindo as pessoas, nem dividindo a substância.</p>
            <p>5. Porque a pessoa do Pai é uma, a do Filho é outra, e a do Espírito Santo, outra.</p>
            <p>6. Mas no Pai, no Filho e no Espírito Santo há uma mesma divindade, igual em glória e coeterna majestade.</p>
            <p>7. O que o Pai é, o mesmo é o Filho, e o Espírito Santo.</p>
            <p>8. O Pai é não criado, o Filho é não criado, o Espírito Santo é não criado.</p>
            <p>9. O Pai é ilimitado, o Filho é ilimitado, o Espírito Santo é ilimitado.</p>
            <p>10. O Pai é eterno, o Filho é eterno, o Espírito Santo é eterno.</p>
            <p>11. Contudo, não há três eternos, mas um eterno.</p>
            <p>12. Portanto não há três (seres) não criados, nem três ilimitados, mas um não criado e um ilimitado.</p>
            <p>13. Do mesmo modo, o Pai é onipotente, o Filho é onipotente, o Espírito Santo é onipotente.</p>
            <p>14. Contudo, não há três onipotentes, mas um só onipotente.</p>
            <p>15. Assim, o Pai é Deus, o Filho é Deus, o Espírito Santo é Deus.</p>
            <p>16. Contudo, não há três Deuses, mas um só Deus.</p>
            <p>17. Portanto o Pai é Senhor, o Filho é Senhor, e o Espírito Santo é Senhor.</p>
            <p>18. Contudo, não há três Senhores, mas um só Senhor.</p>
            <p>19. Porque, assim somos compelidos pela verdade cristã a confessar cada Pessoa separadamente como Deus e Senhor; assim também somos proibidos pela religião católica de dizer que há três Deuses ou Senhores.</p>
            <p>20. O Pai não foi feito de ninguém, nem criado, nem gerado.</p>
            <p>21. O Filho procede do Pai somente, nem feito, nem criado, mas gerado.</p>
            <p>22. O Espírito Santo procede do Pai e do Filho, não feito, nem criado, nem gerado, mas procedente.</p>
            <p>23. Portanto, há um só Pai, não três Pais, um Filho, não três Filhos, um Espírito Santo, não três Espíritos Santos.</p>
            <p>24. E nessa Trindade nenhum é primeiro ou último, nenhum é maior ou menor.</p>
            <p>25. Mas todas as três pessoas coeternas são coiguais entre si; de modo que em tudo o que foi dito acima, tanto a unidade em trindade, como a trindade em unidade deve ser cultuada.</p>
            <p>26. Logo, todo aquele que quiser ser salvo deve pensar desse modo com relação à Trindade.</p>
            <p>27. Mas também é necessário para a salvação eterna, que se creia fielmente na encarnação do nosso Senhor Jesus Cristo.</p>
            <p>28. É, portanto, fé verdadeira, que creiamos e confessemos que nosso Senhor e Salvador Jesus Cristo é tanto Deus como Homem.</p>
            <p>29. Ele é Deus eternamente gerado da substância do Pai; Homem nascido no tempo da substância da sua mãe.</p>
            <p>30. Perfeito Deus, perfeito Homem, subsistindo de uma alma racional e carne humana.</p>
            <p>31. Igual ao Pai com relação à sua divindade, menor do que o Pai com relação à sua humanidade.</p>
            <p>32. O qual, embora seja Deus e Homem, não é dois, mas um só Cristo.</p>
            <p>33. Mas, um, não pela conversão da sua divindade em carne, mas por sua divindade haver assumido sua humanidade.</p>
            <p>34. Um, não, de modo algum, pela confusão de substância, mas pela unidade de pessoa.</p>
            <p>35. Pois assim como uma alma racional e carne constituem um só homem, assim Deus e homem constituem um só Cristo.</p>
            <p>36. O qual sofreu por nossa salvação, desceu ao Hades, ressuscitou dos mortos ao terceiro dia.</p>
            <p>37. Ascendeu ao céu, sentou à direita de Deus Pai onipotente, de onde virá para julgar os vivos e os mortos.</p>
            <p>38. Em cuja vinda, todos os homens ressuscitarão com seus corpos, e prestarão conta de suas obras.</p>
            <p>39. E aqueles que houverem feito o bem irão para a vida eterna; aqueles que houverem feito o mal, para o fogo eterno.</p>
            <p>40. Esta é a fé católica, a qual a não ser que um homem creia firmemente nela, não pode ser salvo.</p>
            </div>
          </ion-col>
        </ion-row>
      </div>`

      
      switch (name) {
        case `apostolico`:
          this.credoHtml = htmlApostolico
          break;
        case `niceno`:
          this.credoHtml = htmlApostolico
          break;
        case `atanasiano`:
          this.credoHtml = htmlAtanasiano
          break;  
        default:
          break;
      }  
  }
  
  closeModal(){
    this.modalController.dismiss()
  }  
 
}
