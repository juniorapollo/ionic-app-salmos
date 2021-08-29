import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Favoritos } from '../enum/favoritos.enum';
import { Song } from '../models/song_model';



// import { Http } from '@angular/http';
@Component({
  selector: 'app-hinario',
  templateUrl: './hinario.page.html',
  styleUrls: ['./hinario.page.scss'],
})
export class HinarioPage implements OnInit {

  data: any = null;
  title:string = ""
  favorito:boolean = false

  constructor( private route: ActivatedRoute, 
               private router: Router
             ) {
                  
        
      this.route.queryParams.subscribe(params => {
        this.title = params.title
        this.favorito = JSON.parse(params.isFavorito)

        if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.song
        }
      });
  

    
  }
  
  ngOnInit() { 
    
  }

  addOrRemoveFavoritos(item:Song){
    let storageFavoritos = this.getStorageFavoritos()
    
    if(storageFavoritos.includes(item.id)){
      const index = storageFavoritos.indexOf(item.id)
      storageFavoritos.splice(index, 1)
      this.favorito = false
    } else {
      storageFavoritos.push(item.id);
      this.favorito = true
    }

    this.setStorageFavoritos(storageFavoritos);
  } 

  isFavorito(item:Song): boolean{
    return this.getStorageFavoritos().includes(item.id)
  }

  getStorageFavoritos(){
    return JSON.parse(localStorage.getItem(Favoritos.SALMOS_GENEBRINOS) || '[]');
  }

  setStorageFavoritos(storageFavoritos:any[]){
    localStorage.setItem(Favoritos.SALMOS_GENEBRINOS, JSON.stringify(storageFavoritos))
  }
  


}
