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

  constructor( private route: ActivatedRoute, 
               private router: Router, 
                private platform: Platform ) {
                  
        
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.song
        }
      });
  

    
  }
  
  ngOnInit() { 
    
  }

  


}
