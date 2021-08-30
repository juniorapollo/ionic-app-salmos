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

  title:string = "Salmos Metrificados";
  items:any[];
  fitlrar:boolean = true
  previa:[string[]]
  favoritos:boolean = false
  storageFavoritos:string[] = []
  timeout 
  modal
  isSearch:boolean = false 
  loading:boolean = true

  constructor(private router: Router,
              private http: HttpClient,
              private songsService: SongsService,
              private route: ActivatedRoute,	  
              private utilService: UtilService,
              ) {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  ngOnInit() {
    this.loading = true
    this.initializeItems();
    this.storageFavoritos = this.getStorageFavoritos();

    
    this.route.queryParams.subscribe(params => {	
      if(params.favoritos)		
        this.favoritos = JSON.parse(params.favoritos)
        this.initializeItems(); 
    });

  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.loading = false
    }, 800);
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

  async searchItems(ev) {
    this.isSearch = true
    // Reset items back to all of the items
    await this.initializeItems();    
    
    // set val to the value of the ev target
    var val = ev.target.value;
    
    this.filtrar(val)   

    this.isSearch = false
  }

  async filtrar(val){
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let isNumber = Number(val)
      
      // Removendo acentos  
      if(!isNumber)      
        val = this.removerAcentos(val)

      this.items = await this.items.filter((data) => {
        if(isNumber)
          return this.filtrarPorId(data, val)
        
        return this.filtrarPorAuthor(data, val)   ||
          this.filtrarPorTitulo(data, val)   ||
          this.filtrarPorEstrofe(data, val) 
      })
    }

  }

  filtrarPorEstrofe(data:any , val:string){

    let filtrado  = []

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


  addOrRemoveFavoritos(item:Song){
    let title = item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase();
    
    if(this.storageFavoritos.includes(item.id)){
      const index = this.storageFavoritos.indexOf(item.id)
      this.storageFavoritos.splice(index, 1)
      this.utilService.presentToast(`${title} removido com sucesso.`, 2000);
    } else {
      this.utilService.presentToast(`${title} adicionado com sucesso.`, 2000);
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
