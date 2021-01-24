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
      title: 'Playlist',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Salmos Genebrinos',
      url: '/list',
      icon: 'list'
    },
    // {
    //   title: 'Blíblia - ACF',
    //   url: '/listBiblia',
    //   icon: 'list'
    // },
    {
      title: 'Pilares da Fé Reformada',
      url: '/confissoes',
      icon: 'photos'
    },
    {
      title: 'Credos',
      url: '/credos',
      icon: 'photos'
    }
  ];

  dark = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    // const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    // this.dark = prefersColor.matches;
   
        this.updateDarkMode();
   
    this.initializeApp();
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', true);
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
