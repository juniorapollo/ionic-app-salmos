import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {
  
  private dataUrl: string = "assets/data/pt_acf.json";

  private data:any[] = new Array();

  teste:number = 0
  
  constructor( private utilService: UtilService,
               private http: HttpClient ) { }


  findAll(observer:Observer<any>){
    
    this.http.get(this.dataUrl).subscribe((data:any)=>{
      data.bible.forEach(element => {
        this.data.push(element)  
      });
    observer.complete();
       
    });
   
   
    console.log(this.teste)
    this.teste++
    return this.data
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

  

}