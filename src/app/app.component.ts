import { Component } from '@angular/core';

import { Events, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EVENTOS } from './enum/eventos.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public onlineOffline: boolean = navigator.onLine;

  public appPages = [
    
    {
      title: 'Salmos Metrificados',
      url: '/list',
      icon: 'list',
      queryParams:{
        favoritos: false
      }

    },
    {
      title: 'Favoritos',
      url: '/list',
      icon: 'star',
      queryParams:{
        favoritos: true
      }
    },
    // {
    //   title: 'Blíblia - ACF',
    //   url: '/listBiblia',
    //   icon: 'list'
    // },
    {
      title: 'Confissões Fé',
      url: '/confissoes',
      icon: 'paper',
      queryParams:{}

    },
    {
      title: 'Declaração de Fé',
      url: '/credos',
      icon: 'bookmarks',
      queryParams:{}
    },
    {
      title: 'Playlist Salmos',
      url: '/home',
      icon: 'musical-notes',
      queryParams:{
        ptBr: false
      }
    }
  ];

  dark = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events
  ) {
    this.splashScreen.show();
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode(false);

    // setTimeout(() => {
    //   this.updateDarkMode(false);

    // }, 5000);

    this.initializeApp();

    this.events.publish(EVENTOS.ONLINE_OFLINE, this.onlineOffline, Date.now())
  }

  updateDarkMode(force: boolean) {
    document.body.classList.toggle('dark', force);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      window.addEventListener('online', () => {
        //Do task when internet connection returns
        this.onlineOffline = true
        this.events.publish(EVENTOS.ONLINE_OFLINE, this.onlineOffline, Date.now())
      });
  
      window.addEventListener('offline', () => {
        //Do task when no internet connection
        this.onlineOffline = false
        this.events.publish(EVENTOS.ONLINE_OFLINE, this.onlineOffline, Date.now())
      });



    });
  }

  ngOnInit(){ 
   

  }
}
