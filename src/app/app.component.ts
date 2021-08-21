import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    
    {
      title: 'Salmos Genebrinos',
      url: '/list',
      icon: 'list',
      queryParams:{}

    },
    // {
    //   title: 'Blíblia - ACF',
    //   url: '/listBiblia',
    //   icon: 'list'
    // },
    {
      title: 'Documentos Fé Reformada',
      url: '/confissoes',
      icon: 'paper',
      queryParams:{}

    },
    {
      title: 'Credos',
      url: '/credos',
      icon: 'bookmarks',
      queryParams:{}
    },
    {
      title: 'Playlist Salmos',
      url: '/home',
      icon: 'musical-note',
      queryParams:{
        ptBr: true
      }
    },
    {
      title: 'Playlist - Inglês',
      url: '/home',
      icon: 'musical-notes',
      queryParams:{
        ptBr: false
      }
    },
    

    
  ];

  dark = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.splashScreen.show();
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
   
        this.updateDarkMode(true);

        setTimeout(() => {
          this.updateDarkMode(false);

        }, 5000);
   
    this.initializeApp();
  }

  updateDarkMode(force: boolean) {
    document.body.classList.toggle('dark', force);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){ 
    console.log("ngOnInit(): appComponent")

  }
}
