import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';



// import { Http } from '@angular/http';
@Component({
  selector: 'app-hinario',
  templateUrl: './hinario.page.html',
  styleUrls: ['./hinario.page.scss'],
})
export class HinarioPage implements OnInit {

  data: any = null;
  title:string = ""

  constructor( private route: ActivatedRoute, 
               private router: Router
             ) {
                  
        
      this.route.queryParams.subscribe(params => {
        this.title = params.title

        if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.song
        }
      });
  

    
  }
  
  ngOnInit() { 
    
  }

  


}
