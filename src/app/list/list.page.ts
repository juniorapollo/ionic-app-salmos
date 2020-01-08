import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { HttpClient, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  private selectedItem: any;

  private items:any=[];
  private data :any;

  constructor(private router: Router,
              private http: HttpClient,
              private songsService: SongsService) { 
    
    this.initializeItems();
   
    

  }

  async openHinario(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        song: item
      }
    };
  
    this.router.navigate(['hinario'], navigationExtras);
  }

  async initializeItems() {
    this.items = await this.songsService.findAll();
    //  for (let i = 1; i <= 150; i++) {
    //    this.items[i-1] ='Salmos ' + i;
    // }
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

    //  data.filter((r)=>{
    //   console.log(r.linhas)
    //  a=  r.linhas.toLowerCase().indexOf(val.toLowerCase()) >= 0 
    //  return a
    // })
    // return a
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

  

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
