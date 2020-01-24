import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { BibliaService } from '../services/biblia.service';
import { Observable, Subject } from 'rxjs';
import { Bible } from '../models/bible_model';


@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.page.html',
  styleUrls: ['./capitulos.page.scss'],

})
export class CapitulosPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bibliaService: BibliaService,
    private utilService: UtilService) {
    this.listCapitulo = true;
  }

  indexInicial: number = 0;
  index: number = 0;
  sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    speed: 1,
    effect: 'flip',
    autoHeight: true,
    cssMode: true,
    //initialSlide: this.index,
    allowClick: false,
    loop: true
    //autoplay:true,

    //preloadImages: false,
    // Enable lazy loading
    //lazy: true
  };

  capitulos: any[] = new Array();
  //capSelecionado= new Array<[]>();
  name: any = null;
  listCapitulo: boolean = true;
  slides: any = null;
  capituloLenght: number = 0;
  capAtual: number = 0;
  livro: Bible;
  count: number = 0
  capSelecionado: any[] = new Array()
  outros: any[] = new Array()
  
  observable = new Observable(observer => {
     observer.next(this.livro.chapters[this.index])
  });

  capitulosParaCarregar = new Observable(observer => {
    let capitulosRestantes: any[] = new Array();

    // let indexSelecioned = this.livro.chapters.indexOf(this.livro.chapters[this.index])

    // capitulosRestantes = this.livro.chapters.filter((x, index) => {
    //   return index != indexSelecioned;
    // })

    capitulosRestantes = this.getArrayOrganizado();

    const restantes = capitulosRestantes.entries();
    const subject = new Subject<any>();
    let r:any[] = new Array();    

    let intervalId = setInterval(() => { 
      try {
        r.push(restantes.next().value[1]);
        subject.next(r) 
      } catch (error) {
        console.log('Stop SetInterval')
        clearInterval(intervalId);
      }
     }, 1000);
    
     subject.subscribe({
      next: (value) => observer.next(value)
    });

    //observer.next(result.value[1]);
    // this.slides = document.querySelector('ion-slides');
    // let swiper = this.slides.swiper;

    // swiper.destroy( true , true );
    // observer.next(capitulosRestantes);     

    //observer.next(this.capSelecionado)


  });


  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        let obj = this.router.getCurrentNavigation().extras.state;
        this.livro = obj.data
        // this.name = await obj.data.name
        //this.listCapitulo = await obj.listCapitulo
        // this.capSelecionado = await obj.data.chapters
        //console.log(this.capSelecionado)
      }
    });
    
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

  returnListCap() {
    this.slides = document.querySelector('ion-slides');
    if (this.slides != null) {
      let swiper = this.slides.swiper;
      swiper.update();
    }
    this.listCapitulo = true;
  }

  async sidesDidLoad(mySlider) {
    console.log('sidesDidLoad')
    this.slides = await document.querySelector('ion-slides');
    let swiper = this.slides.swiper;
   // swiper.slideTo(0, this.index);

    swiper.update();

    // this.capitulosParaCarregar.subscribe(()=>{});
  }

  goToCapitulo(index) {
    // this.capitulosParaCarregar.subscribe((x:any)=>{
    //   console.log(x[1])
    // })
    this.listCapitulo = !this.listCapitulo;

    this.indexInicial = index;
    this.index = index;
    this.capAtual = this.index + 1
    // let a = await this.utilService.showAutoHideLoader('Carregando',1);

    // this.observable.subscribe(()=>{})
  }

  // nextCapitulo(index){
  //  this.slides =  document.querySelector('ion-slides');
  // // this.slides.swiper.slideNext();
  // //this.capSelecionado=this.capitulos[10];
  //    console.log(this.slides.swiper.swipeDirection);
  //    console.log(index);
  //    }

  // onSlideMoved(event) {
  //   console.log(event);
  //   /** isEnd true when slides reach at end slide */
  //   event.target.isEnd().then(isEnd => {
  //     console.log('End of slide', isEnd);
  //   });

  //   event.target.isBeginning().then((istrue) => {
  //     console.log('isBeginning', istrue);
  //   });
  // }

  

  async slideChanged(event, mySlider, index, slides) {
    //const { slides, activeIndex, $wrapperEl, slideNext } = swiper; 
    //if (activeIndex == undefined) return;
    //console.log(slides[activeIndex]);
    // console.log('slideChanged');
    // console.log(mySlider);
    // console.log(index);
    // console.log(slides);

    // this.slides.swiper.swipeDirection ==='next'? this.capAtual++ : this.capAtual
    // this.slides.swiper.swipeDirection ==='prev'? this.capAtual-- : this.capAtual
    // this.slides.swiper.swipeDirection ==='next'? this.index++ : this.index
    // this.slides.swiper.swipeDirection ==='prev'? this.index-- : this.index

    // this.capituloLenght = await this.capitulos[this.capAtual-1].length 
    // this.observable.subscribe(()=>{})
    //console.log(this.capitulos[this.index]);
    // if(isNext) {this.capSelecionado[this.index+1] = this.capitulos[this.index+1]}

  }

  



  // this.capSelecionado.push(this.capitulos[activeIndex+1]);  


  // let biblia = await this.bibliaService.findAllBooks();
  // console.log(biblia);

  // console.log('Current index is', currentIndex);





}



