import { Component, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { SongsService } from '../services/songs.service';


export interface Track {
	name?: string;
  path?: string;
  author?: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  	playlist: Track[] = []

  	activeTrack: Track = null;
	player: Howl = null;
	isPlaying = false;
  	progress = 0;
  	isRandom = false;
	@ViewChild('range') range: IonRange;

  constructor(private songsService: SongsService) {}


  async ngOnInit() {
     let songs:any = await this.songsService.findAll();

     songs.forEach(song => {
       let player:Track = {}
       player.name = song.title
       player.path = song.pathMp3
       player.author =  song.author
       this.playlist.push(player)
     });
  }


  ngOnDestroy() {
	  if(this.isPlaying) this.togglePlayer(true)
	}

	// function to stop playing existing track (if playing) then play audio file.
	// run update progress function so % complete indicator is updated.
	start(track: Track) {
		if (this.player) {
			this.player.stop();
		}
		this.player = new Howl({
			src: [track.path],
			html5: true,
			onplay: () => {
				console.log('onplay');
				this.isPlaying = true;
				this.activeTrack = track;
				this.updateProgress();
			},
			onend: () => {
				console.log('onend');
				this.isRandom ? this.random() : this.next();
			},
		});
		this.player.play();
	}

	togglePlayer(pause: any) {
		this.isPlaying = !pause;
		if (pause) {
			this.player.pause();
		} else {
			this.player.play();
		}
	}

	next() {
		const index = this.playlist.indexOf(this.activeTrack);
		if (index !== this.playlist.length - 1) {
			this.start(this.playlist[index + 1]);
		} else {
			this.start(this.playlist[0]);
		}
	}

	prev() {
    const index = this.playlist.indexOf(this.activeTrack);
		if (index > 0) {
			this.start(this.playlist[index - 1]);
		} else {
			this.start(this.playlist[this.playlist.length - 1]);
		}
  }
  
  random(){
    const indexOriginal = this.playlist.indexOf(this.activeTrack);
    const min = Math.ceil(0);
    const max = Math.floor(this.playlist.length-1);
    const index =  Math.floor(Math.random() * (max - min+1)) + min;

    if(indexOriginal == index) this.random()

    this.start(this.playlist[index]);
  }

	seek() {
		const newValue = +this.range.value;
		const duration = +this.player.duration();
		this.player.seek(duration * (newValue / 100) );
	}

	updateProgress() {
		const seek = this.player.seek();
		this.progress = (seek / this.player.duration()) * 100 || 0;
		setTimeout(() => {
			this.updateProgress();
		}, 1000);
  }
  
  setRandom(){
    this.isRandom = !this.isRandom
  }

}
