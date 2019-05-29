import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  private selectedItem: any;

  items = [];
  metrificador = [];

  arraySalmos: any[]= []; 
  
  constructor() {
    this.initializeItems();    
  }

  initializeItems() {
    this.items = [  'SALMOS 1  ',
                    'SALMOS 2  ',
                    'SALMOS 3  ',
                    'SALMOS 4  ',
                    'SALMOS 5  ',
                    'SALMOS 6  ',
                    'SALMOS 7  ',
                    'SALMOS 8  ',
                    'SALMOS 9  ',
                    'SALMOS 10 ',
                    'SALMOS 11 ',
                    'SALMOS 12 ',
                    'SALMOS 13 ',
                    'SALMOS 14 ',
                    'SALMOS 15 ',
                    'SALMOS 16 ',
                    'SALMOS 17 ',
                    'SALMOS 18 ',
                    'SALMOS 19 ',
                    'SALMOS 20 ',
                    'SALMOS 21 ',
                    'SALMOS 22 ',
                    'SALMOS 23 ',
                    'SALMOS 24 ',
                    'SALMOS 25 ',
                    'SALMOS 26 ',
                    'SALMOS 27 ',
                    'SALMOS 28 ',
                    'SALMOS 29 ',
                    'SALMOS 30 ',
                    'SALMOS 31 ',
                    'SALMOS 32 ',
                    'SALMOS 33 ',
                    'SALMOS 34 ',
                    'SALMOS 35 ',
                    'SALMOS 36 ',
                    'SALMOS 37 ',
                    'SALMOS 38 ',
                    'SALMOS 39 ',
                    'SALMOS 40 ',
                    'SALMOS 41 ',
                    'SALMOS 42 ',
                    'SALMOS 43 ',
                    'SALMOS 44 ',
                    'SALMOS 45 ',
                    'SALMOS 46 ',
                    'SALMOS 47 ',
                    'SALMOS 48 ',
                    'SALMOS 49 ',
                    'SALMOS 50 ',
                    'SALMOS 51 ',
                    'SALMOS 52 ',
                    'SALMOS 53 ',
                    'SALMOS 54 ',
                    'SALMOS 55 ',
                    'SALMOS 56 ',
                    'SALMOS 57 ',
                    'SALMOS 58 ',
                    'SALMOS 59 ',
                    'SALMOS 60 ',
                    'SALMOS 61 ',
                    'SALMOS 62 ',
                    'SALMOS 63 ',
                    'SALMOS 64 ',
                    'SALMOS 65 ',
                    'SALMOS 66 ',
                    'SALMOS 67 ',
                    'SALMOS 68 ',
                    'SALMOS 69 ',
                    'SALMOS 70 ',
                    'SALMOS 71 ',
                    'SALMOS 72 ',
                    'SALMOS 73 ',
                    'SALMOS 74 ',
                    'SALMOS 75 ',
                    'SALMOS 76 ',
                    'SALMOS 77 ',
                    'SALMOS 78 ',
                    'SALMOS 79 ',
                    'SALMOS 80 ',
                    'SALMOS 81 ',
                    'SALMOS 82 ',
                    'SALMOS 83 ',
                    'SALMOS 84 ',
                    'SALMOS 85 ',
                    'SALMOS 86 ',
                    'SALMOS 87 ',
                    'SALMOS 88 ',
                    'SALMOS 89 ',
                    'SALMOS 90 ',
                    'SALMOS 91 ',
                    'SALMOS 92 ',
                    'SALMOS 93 ',
                    'SALMOS 94 ',
                    'SALMOS 95 ',
                    'SALMOS 96 ',
                    'SALMOS 97 ',
                    'SALMOS 98 ',
                    'SALMOS 99 ',
                    'SALMOS 100',
                    'SALMOS 101',
                    'SALMOS 102',
                    'SALMOS 103',
                    'SALMOS 104',
                    'SALMOS 105',
                    'SALMOS 106',
                    'SALMOS 107',
                    'SALMOS 108',
                    'SALMOS 109',
                    'SALMOS 110',
                    'SALMOS 111',
                    'SALMOS 112',
                    'SALMOS 113',
                    'SALMOS 114',
                    'SALMOS 115',
                    'SALMOS 116',
                    'SALMOS 117',
                    'SALMOS 118',
                    'SALMOS 119',
                    'SALMOS 120',
                    'SALMOS 121',
                    'SALMOS 122',
                    'SALMOS 123',
                    'SALMOS 124',
                    'SALMOS 125',
                    'SALMOS 126',
                    'SALMOS 127',
                    'SALMOS 128',
                    'SALMOS 129',
                    'SALMOS 130',
                    'SALMOS 131',
                    'SALMOS 132',
                    'SALMOS 133',
                    'SALMOS 134',
                    'SALMOS 135',
                    'SALMOS 136',
                    'SALMOS 137',
                    'SALMOS 138',
                    'SALMOS 139',
                    'SALMOS 140',
                    'SALMOS 141',
                    'SALMOS 142',
                    'SALMOS 143',
                    'SALMOS 144',
                    'SALMOS 145',
                    'SALMOS 146',
                    'SALMOS 147',
                    'SALMOS 148',
                    'SALMOS 149',
                    'SALMOS 150'];

    this.metrificador= ['COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – ABRIL – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'LUCAS G. FREIRE – 2015',
    'NELSON NINCAO – JULHO – 2018. ',
    'NELSON NINCAO – JUNHO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2017',
    'NELSON NINCAO – JUNHO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA – 2010',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – MAIO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'NELSON NINCAO – JUNHO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'MÁRCIO VIANA E LUCAS G. FREIRE – 2011',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'LUCAS G. FREIRE – 2013',
    'NELSON NINCAO – JUNHO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'LUCAS G. FREIRE – ABRIL – 2014',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'GERALDO NELSON VEZZOZO SILVA – 2016',
    'NELSON NINCAO – OUTUBRO – 2018',
    'MÁRCIO VIANA E LUCAS G. FREIRE – 2011',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2108',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'LUCAS G. FREIRE – MAIO – 2014',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – JULHO – 2018',
    'LUCAS G. FREIRE – FEVEREIRO – 2014',
    'NELSON NINCAO – JUNHO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'NELSON NINCAO – AGOSTO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA.',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – OUTUBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'LUCAS G. FREIRE – DEZEMBRO – 2013',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'LUCAS G. FREIRE – MARÇO – 2014',
    'LUCAS G. FREIRE – FEVEREIRO – 2014',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – NOVEMBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'LUCAS G. FREIRE – FEVEREIRO – 2014',
    'NELSON NINCAO – SETEMBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'LUCAS G. FREIRE – DEZEMBRO – 2013',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – NOVEMBRO – 2017',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'GERALDO NELSON VEZZOZO SILVA – JULHO – 2016',
    'NELSON NINCAO – JULHO – 2018',
    'LUCAS G. FREIRE E MÁRCIO VIANA – DEZEMBRO – 2013',
    'NELSON NINCAO – OUTUBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA. (1-16) E NELSON NINCAO (17-176) – JANEIRO – 2019',
    'GERALDO NELSON VEZZOZO SILVA – 2016.',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – JULHO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'COMISSÃO BRASILEIRA DE SALMÓDIA',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – SETEMBRO – 2018',
    'NELSON NINCAO – DEZEMBRO – 2018',
    'LUCAS G. FREIRE – JANEIRO – 2014',
    'MÁRCIO VIANA E LUCAS G. FREIRE',
    'NELSON NINCAO – SETEMBRO – 2018. ',
    'MÁRCIO VIANA E LUCAS G. FREIRE – 2014',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'NELSON NINCAO – AGOSTO – 2018',
    'COMISSÃO BRASILEIRA DE SALMÓDIA'];
  }

  carregaListSalmos(){
    this.arraySalmos = [];
    console.log(this.items.length);

    this.items.forEach((data,index) => {
      this.arraySalmos.push({
        'item': data ,
        'metrificador': this.metrificador[index]
      });
    });
  }


  getItems(ev) {

    // Reset items back to all of the items
    this.initializeItems(); 
    // set val to the value of the ev target
    var val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item, index) => {
        // if(item.toLowerCase().indexOf(val.toLowerCase()) > -1){
        //  console.log(cont+1 + ' - '+ this.metrificador[cont]);
        // }
       
       if(item.toLowerCase().indexOf(val.toLowerCase()) > -1){
        this.metrificador = this.metrificador.filter((met) => {
          return(met.toString() === this.metrificador[index]) ;
         });       
      };     
      
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
         
      })
      
     

      // this.metrificador = this.metrificador.filter((met) => {
      //   return (met.toLowerCase().indexOf(this.metrificador[cont]) > - 1);
      //   //return (met.toLowerCase().indexOf(this.metrificador[cont].toLowerCase()) > -1);
      // }) 

    } 
  }

  itemSelecionado(val){
    console.log(val);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
