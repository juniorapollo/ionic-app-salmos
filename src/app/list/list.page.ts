import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { HttpClient, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song_model';
import { LoadingController } from '@ionic/angular';
import { UtilService } from '../services/util.service';
import { Favoritos } from '../enum/favoritos.enum';
import { MSG } from '../enum/msg.enum';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {

  title:string = "Salmos";
  items:any;
  fitlrar:boolean = true
  previa:[string[]]
  favoritos:boolean = false
  storageFavoritos:string[] = []
  timeout 
  modal

  constructor(private router: Router,
              private http: HttpClient,
              private songsService: SongsService,
              private route: ActivatedRoute,	  
              private utilService: UtilService,
              ) {}

  ngOnInit() {
    this.utilService.openLoader(MSG.CARREGANDO_PAGINA);

    this.initializeItems();
    this.storageFavoritos = this.getStorageFavoritos();

    
    this.route.queryParams.subscribe(params => {	
      if(params.favoritos)		
        this.favoritos = JSON.parse(params.favoritos)
        this.initializeItems(); 
    });

  }


  

  ionViewDidEnter(){
    this.utilService.closeLoader()
  }

  ngOnDestroy(){

  }
  
  async openHinario( data:Song ) {
    let navigationExtras: NavigationExtras = {
      state: {
        song: data
      }, 
      queryParams: {
        title: data.title,
        isFavorito: this.isFavorito(data)
      }
    };
  
    this.router.navigate(['hinario'], navigationExtras);
  }

  async initializeItems() {
    if(this.favoritos){
      this.items = await this.songsService.findAllFavoritos();
    }else{
      this.items = await this.songsService.findAll();
    }

  }

  async getItems(ev) {

    // Reset items back to all of the items
    await this.initializeItems();    
    
    // set val to the value of the ev target
    var val = ev.target.value;

    if(!Number(val)){
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.filtrar(val)   
      }, 500);
    }else{
      this.filtrar(val)
    }
    
  }

  async filtrar(val){
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let isNumber = Number(val)

      if(!isNumber)
      this.utilService.openLoader(MSG.PESQUISANDO);
      
      // Removendo acentos
      val = this.removerAcentos(val)

      this.items = await this.items.filter((data) => {
        if(isNumber)
          return this.filtrarPorId(data, val)
        
        return this.filtrarPorAuthor(data, val)   ||
          this.filtrarPorTitulo(data, val)   ||
          this.filtrarPorEstrofe(data, val) 
      })
    }

    this.utilService.closeLoader()

  }

   filtrarPorEstrofe(data:any , val:string){

    let filtrado  = []

    if(val.length > 3){
      // console.log(data.estrofes)

      let estrofres:[string[]] = data.estrofes
      let filtrou:boolean = false
      filtrado =  estrofres.filter(
        (estrofe)=>{
          const a:string[] =  estrofe.filter((res) => {
            filtrou = this.removerAcentos(res.toLowerCase()).indexOf(val.toLowerCase()) >= 0

            if(filtrou){
              data.previa = estrofe
            }
              
            return filtrou;
            
          })

          if(a.length > 0){
          data.previa =  data.previa.map((data)=>{ 
              if(data == a[0]){ 
                data= ` <strong class="previa"> ${data} </strong>`
              }
              return data;
            }) 
          } 
            
          return a.length > 0
        }

      )
     }  
      return filtrado.length > 0


  }

  filtrarPorId(data : any, val:string){
    return data.id.toLowerCase().indexOf(val.toLowerCase()) >= 0 
  }

  filtrarPorAuthor(data : any, val:string){
    if(+val >= 0) return false
    return data.author.toLowerCase().indexOf(val.toLowerCase()) >= 0 
  }

  filtrarPorTitulo(data : any, val:string){
    return data.title.toLowerCase().indexOf(val.toLowerCase()) >= 0
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  addOrRemoveFavoritos(item:Song){
    
    if(this.storageFavoritos.includes(item.id)){
      const index = this.storageFavoritos.indexOf(item.id)
      this.storageFavoritos.splice(index, 1)
    } else {
      this.storageFavoritos.push(item.id);
    }

    this.setStorageFavoritos(this.storageFavoritos);
    this.initializeItems();
  } 

  isFavorito(item:Song): boolean{
    return this.storageFavoritos.includes(item.id)
  }

  getStorageFavoritos(){
    return JSON.parse(localStorage.getItem(Favoritos.SALMOS_GENEBRINOS) || '[]');
  }

  setStorageFavoritos(storageFavoritos:any[]){
    localStorage.setItem(Favoritos.SALMOS_GENEBRINOS, JSON.stringify(storageFavoritos))
  }

  removerAcentos(str:string){
    if (str && str.trim() != '') {
      str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }
    return str;
  }
    

  
}
