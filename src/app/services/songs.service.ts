import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
import { Song } from '../models/song_model';



@Injectable({
  providedIn: 'root'
})
export class SongsService {
  
  private dataUrl: string = "assets/data/songs.json";

  constructor( private utilService: UtilService,
               private http: HttpClient ) { }

  async findAll(){
    return new Promise(resolve => {
      this.http.get(this.dataUrl)
      .subscribe(result =>{
         let data:any = result
        resolve(data.songs)
      });
    });
  }

  // async findAllTitle(){
  //   return new Promise(resolve => {
  //     this.http.get(this.dataUrl)
  //     .subscribe(result =>{
  //       const data :any = result
  //       resolve(data.songs)
  //     });
  //   });
  // }

  // async findById( id: string, obj?:any ){
    
  //   const a :any= await this.findAll();
  //   console.log(a.songs);

  //   return new Promise(resolve=>{
  //     console.log(this.utilService.getObj(a.songs,'id', id));
     
  //     resolve(this.utilService.getObj(a.songs,'id', id))

  //   })
    
  // }

  // findByTitle( obj: any, title: string ){
  //   return this.utilService.getObjects(obj,'title', title)
  // }

  // findByType( obj: any, type: string ){
  //   return this.utilService.getObjects(obj, 'type', type)
  // }

  // findByAuthor( obj: any, author: string ){
  //   return this.utilService.getObjects(obj, 'author', author)
  // }

}
