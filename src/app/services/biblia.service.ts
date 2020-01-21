import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {
  

  private dataUrl: string = "assets/data/pt_acf.json";
  private data = null;
  constructor( private utilService: UtilService,
               private http: HttpClient ) { }


  async findAll(){
    return new Promise(resolve => {
      this.http.get(this.dataUrl)
      .subscribe(result =>{
        const data :any = this.utilService.getValues(result, 'name')
        resolve(data)
      });
    });
  }

  async findByName(data: any, name: any) {
    return    await this.utilService.getObj(data,'name',name);
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