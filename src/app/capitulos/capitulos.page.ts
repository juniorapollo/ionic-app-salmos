import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { BibliaService } from '../services/biblia.service';
import { Observable, Subject } from 'rxjs';
import { IonSlides } from '@ionic/angular';
import { Capitulo, Livro, Verso } from '../models/bible_model';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.page.html',
  styleUrls: ['./capitulos.page.scss'],
})
export class CapitulosPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides;
  // @ViewChild('slider') private slider: IonSlides;


 slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
  
           $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
           if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;

        console.log(swiper)
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
  
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bibliaService: BibliaService,
    private utilService: UtilService) {
    this.listCapitulo = true;
  }

  livro: Livro;
  versiculos: any[]
  indexCapitulo: number = 0

  // Sao os capitulos da biblia
  capitulos: any[] = new Array();

  index: number;
  atualizando:boolean = true

  sliderConfig = {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    effect: 'flip',
    autoHeight: true,
    cssMode: true,
    initialSlide: 0,
    allowClick: true,
    loop: false,
    // lazy: true,
  };

  
  //capSelecionado= new Array<[]>();
  name: any = null;
  listCapitulo: boolean = true;
  listCapituloBefore:boolean  = false;
  listCapituloNext:boolean  = false;
  
  slides: any = null;
  capAtual: number = 0;
  
  count: number = 0
  capSelecionado: any[] = new Array()
  outros: any[] = new Array()
  
  primeiraVez = true;

  capitulosObs = new Observable(observer => {
    observer.next(this.livro.chapters)
    this.ionSlides.slideTo(this.index,0,false)
  })
  
  async ngOnInit() {
    // Recebo o Livro Selecionado na  pagina ListBiblia
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log("1: ", "Recebo o Livro Selecionado na  pagina ListBiblia")
        this.livro = this.router.getCurrentNavigation().extras.state.livro
        
       

        // (_nextFourAppointments | async).availabilities;

        // True para listar os capitulos do livro selecionado
        this.listCapitulo = true
        // this.iniciarCapitulos();


        // this.name = await obj.data.name
        //this.listCapitulo = await obj.listCapitulo
        // this.capSelecionado = await obj.data.chapters
        //console.log(this.capSelecionado)
      }
    });
    // console.log(this.livro)
    // this.observable.subscribe(data=>{
    //   console.log(data)
    // })
  }

  // capitulosParaCarregar = new Observable(observer => {
    //   let capitulosRestantes: any[] = new Array();
  
    //   let indexSelecioned = this.livro.chapters.indexOf(this.livro.chapters[this.index])
  
    //   capitulosRestantes = this.livro.chapters.filter((x, index) => {
    //     return index != indexSelecioned;
    //   })
  
    //   capitulosRestantes = this.getArrayOrganizado();
  
    //   const restantes = capitulosRestantes.entries();
    //   const subject = new Subject<any>();
    //   let r:any[] = new Array();    
  
    //   // let intervalId = setInterval(() => { 
    //   //   try {
    //   //     r.push(restantes.next().value[1]);
    //   //     subject.next(r) 
    //   //   } catch (error) {
    //   //     console.log('Stop SetInterval')
    //   //     clearInterval(intervalId);
    //   //   }
    //   //  }, 1000);
      
    //   //  subject.subscribe({
    //   //   next: (value) => observer.next(value)
    //   // });
  
    //   //observer.next(result.value[1]);
    //   // this.slides = document.querySelector('ion-slides');
    //   // let swiper = this.slides.swiper;
  
    //   // swiper.destroy( true , true );
    //   // observer.next(capitulosRestantes);     
  
    //   //observer.next(this.capSelecionado)
  
  
    // });
evento(s){
  console.log(s)
}


  goToCapitulo(capitulo:Capitulo, indexCapitulo:number) : void {
    console.log("2.", "capitulo Selecionado", capitulo, "Index - Numero Capitulo:", indexCapitulo)
    this.indexCapitulo = indexCapitulo
     //Verso Inicial
     this.versiculos = this.livro.chapters[this.indexCapitulo]

    // if(this.ionSlides !== undefined)
    //   this.ionSlides.slideTo(index, 1, false)

    this.listCapitulo = false
    

    // this.indexInicial = index;
    this.index = indexCapitulo;
    // this.iniciarCapitulos()
  
  }


  getArrayOrganizado(){
    let arrAux:any[] = new Array();
    this.livro.chapters.forEach((element)=>{
      arrAux.push(element);
    })
    let newArray = new Array();
    newArray = arrAux.filter((x,index)=>{
      return index > this.index
    })
    return newArray.concat(arrAux.splice(0,this.index+1))
  
  }

  iniciarCapitulos(){
      // this.primeiraVez = true
      // this.capitulos = new Array(this.livro.chapters.length-3)
      // this.capitulos.unshift(this.livro.chapters[this.index])
      // this.capitulos.unshift(this.livro.chapters[this.index])
      // this.capitulos.unshift(this.livro.chapters[this.index])
      // this.capAtual = this.index

      return;

    
  }

  returnListCap() {
    this.slides = document.querySelector('ion-slides');
    if (this.slides != null) {
      console.log("returnListCap()")
      let swiper = this.slides.swiper;
      swiper.update();
    }
    this.listCapitulo = true;
  }

  
  ionSlidePrevStart(mySlider){
    // debugger
    this.ionSlides.getActiveIndex().then(activeIndex=>{
      const indexPrev = activeIndex;

      if(this.primeiraVez){
        this.primeiraVez = false
        return
      }

      if(activeIndex < 0) return

      this.capitulos[activeIndex] = (this.livro.chapters[indexPrev])
      this.setInitialSlide();
      this.setPrevCapituloAtual()

    })


  }

  ionSlideNextStart(mySlider){
    this.versiculos = 

    this.versiculos = this.livro.chapters[this.indexCapitulo++]
    this.ionSlides.slideTo(1,1,false)
    
    

    // debugger
    // this.ionSlides.getActiveIndex().then(activeIndex=>{
    //   const nextIndex = activeIndex;

    //   if(this.primeiraVez){
    //     this.primeiraVez = false
    //     return
    //   }

    //   if(activeIndex == this.capitulos.length) return      


    //   this.capitulos[activeIndex] = (this.livro.chapters[nextIndex])
    //   this.setInitialSlide();
    //   this.setNextCapituloAtual();

    // })

  }

  setPrevCapituloAtual(){
    this.capAtual--
  }

  setNextCapituloAtual(){
    this.capAtual++
  }

  setInitialSlide(){
    this.sliderConfig.initialSlide = 1
  }

}


