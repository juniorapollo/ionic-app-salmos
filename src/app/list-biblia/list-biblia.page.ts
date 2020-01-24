import { Component, OnInit } from '@angular/core';
import { BibliaService } from '../services/biblia.service';
import { UtilService } from '../services/util.service';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-list-biblia',
  templateUrl: './list-biblia.page.html',
  styleUrls: ['./list-biblia.page.scss'],
})
export class ListBibliaPage implements OnInit {

  private items:any
  

  items$ =  new Observable(observer=>{
   // observer.next(this.bibliaService.findAll())
    //this.utilService.showLoader('Carregando..')
    
    setTimeout(() => {
      observer.next(this.bibliaService.findAll(observer))
    }, 200);

  });
 
  constructor(private bibliaService: BibliaService,
              private utilService : UtilService,
              private router: Router) {}

  ngOnInit(){
    this.initializeItems();
  }
    

   initializeItems() {
    this.items$.subscribe((data) =>this.items = data ,// if(x){console.log("APAGOU");this.utilService.hideLoader(0);}
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observable Complete')
    )
    // this.items = await this.bibliaService.findAll();
    //  for (let i = 1; i <= 150; i++) {
    //    this.items[i-1] ='Salmos ' + i;
    // } 
  }

  async getItems(data,ev) {
    this.bibliaService.searchItems(data);


    // Reset items back to all of the items
    //await this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
    data.subscribe((r)=>{
      this.items = r
      console.log(this.items)
    })

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      //  this.items = await this.items.filter((data) => {
      //   return (data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      //    })
    }
  }

  async goToListCapitulo( livro ){

    //console.log(keyName)

    //let obj:any =  await this.bibliaService.findAllBooks();
    // const data = await this.bibliaService.findByName( obj, keyName );
    // const chapters =  await data[0].chapters;
    // const name = await data[0].name;
    let navigationExtras: NavigationExtras = {
      state: {
        // chapters: chapters,
        // name: name,
        // length:chapters.length,
        // listCapitulo : true,
        data : livro
      }
    };
  
    this.router.navigate(['capitulos'], navigationExtras).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
  }

 

}
