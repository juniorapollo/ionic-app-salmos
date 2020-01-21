import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { HttpClient, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { SongsService } from '../services/songs.service';
import { Song } from '../models/song_model';
import { LoadingController } from '@ionic/angular';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {
 
  private items:any;

  constructor(private router: Router,
              private http: HttpClient,
              private songsService: SongsService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.showAutoHideLoader('Carregando...',2000);
    
    if(this.items===undefined)this.initializeItems(); 
  }

  ngOnDestroy(){
    
  }
  
  async openHinario( data:Song ) {
    let navigationExtras: NavigationExtras = {
      state: {
        song: data
      }
    };
  
    this.router.navigate(['hinario'], navigationExtras);
  }

  async initializeItems() {
    console.log('inicializeItems');
    this.items = await this.songsService.findAll();
  }

  async getItems(ev) {
    // Reset items back to all of the items
    await this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
       this.items = await this.items.filter((data) => {
        if (  this.filtrarPorAuthor(data, val) ||
             this.filtrarPorTitulo(data, val)  ||
             this.filtrarPorId(data, val) ){
          return true
        }
    return false
  })
        
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
  }

  async filtrarPorEstrofe(data:any , val:string){
      let a = data.filter((r) => {
        return (r.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
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
}
