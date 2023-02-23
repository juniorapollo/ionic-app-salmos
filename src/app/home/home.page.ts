import { Component, OnInit, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { Events, IonRange } from '@ionic/angular';
import { SongsService } from '../services/songs.service';
import { UtilService } from '../services/util.service';
import { MSG } from '../enum/msg.enum';
import { EVENTOS } from '../enum/eventos.enum';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const MUSIC_TYPE = {
	ptBr: 'ptBr',
	enUs: 'enUs'
}

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
export class HomePage implements OnInit {
	musicTypeDefault:string = MUSIC_TYPE.ptBr
	musicTypeSelected:string

  	playlist: Track[] = []
  	activeTrack: Track = null;
	player: Howl = null;
	isPlaying = false;
  	progress = 0;
  	isRandom = false;

	@ViewChild('range') range: IonRange;

	isPtBr:boolean = true;
	isOnline: boolean = navigator.onLine; 

  	constructor(
		private songsService: SongsService,
		private route: ActivatedRoute,
		private readonly utilService: UtilService,
		public events: Events	  
		) {
			events.subscribe(EVENTOS.ONLINE_OFLINE, (onlineOffline, time) => {
				this.isOnline = onlineOffline;
				console.log('onlineOffline', this.isOnline, time)
			});
		
		}

	ngOnInit() {
		this.segmentChanged(MUSIC_TYPE.ptBr)
	}
	
	ionViewDidEnter(){
		this.utilService.closeLoader()
	}

	ngOnDestroy() {
		if(this.isPtBr)
		this.isPtBr = !this.isPtBr		  	  
		if(this.isPlaying) 
		this.togglePlayer(true)

		this.utilService.closeLoader()
			
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

	stop() {
		if(this.player){
			this.player.stop()
			this.activeTrack = null;
		}
	}

	async segmentChanged( selected:string ) {
		this.utilService.openLoader(MSG.CARREGANDO_PAGINA)
		if(this.musicTypeSelected !== selected) {
			this.musicTypeSelected = selected
			this.playlist = []

			this.songsService.findByType().subscribe(
				{
					next:(data:any) => {
						let { songs } = data

						this.playlist = songs.map(song=> {
							return { 
								name: song.title,
								path: selected === MUSIC_TYPE.ptBr ? song.pathMp3_ptBr : song.pathMp3_enUs,
								author:  song.author
							}
						})
					},
					error: (err) => console.error(err),
					complete: () => console.log('Requisicao Completa')
				}
			)
		} 
		this.utilService.closeLoader()
	}



}
