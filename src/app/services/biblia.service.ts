import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Observer } from 'rxjs';
import { Biblia,Livro } from '../models/bible_model';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {
  
  private dataUrl: string = "assets/data/pt_acf.json";

  private livros:Livro[] = new Array();

  teste:number = 0
  
  constructor( private utilService: UtilService,
               private http: HttpClient ) { }


  getAllLivros(observer:Observer<any>){
    
    this.http.get(this.dataUrl).subscribe((data:any)=>{
      console.log(data)
      data.bible.forEach(element => {
        this.livros.push(element)  
      });
    observer.complete();
    });
   
  
    return this.livros
  }

  async findByName(data: any, name: any) {
    return    await this.utilService.getObj(data,'name',name);
  }

  searchItems(data) {
    data.subscribe((res:any)=>{
      let itemsArray = [];
      let obj = this.findByName(res, 'Daniel');
      itemsArray.push(obj)
      
      console.log(itemsArray);
      return itemsArray;
  });
}

  async findAllBooks(){
    return new Promise(resolve => {
      this.http.get(this.dataUrl)
      .subscribe(result =>{
        const data :any = result;
        resolve(data.bible)
      });
    });
  }

  async listarNomesIndexLivro(){
    let biblia:Biblia = await this.getBiblia()

    let nomeIndex = biblia.livros.map((livro, index) => {return {
      primeiroLivro: index == 0,
      ultimoLivro: index == biblia.livros.length - 1,
      index: index,
      nome: livro.name,
      totalCapitulos: livro.chapters.length,
      showMsgNovoTestamento: index == 39,
      showMsgVelhoTestamento: index == 0,
      // capitulo: capitulo
    }})

    return nomeIndex
  }

  async getLivroByIndex(index): Promise<Livro>{
    let biblia:Biblia = await this.getBiblia()
    console.log(index)
    return biblia.livros[index]

  }

  async getBiblia() : Promise<Biblia>{
    let result:any = await this.http.get(this.dataUrl).toPromise()
    let biblia:Biblia = result

    return biblia;
  
  }

  

}