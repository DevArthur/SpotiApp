import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artista : any = {};
  loading: boolean = true;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService){
                
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });    
  }

  getArtist(id: string){   
    
    this.spotifyService.getArtist(id)
        .subscribe(artista => {
            console.log(artista);
            this.artista = artista;
            this.loading = false;
      });
  }

  getTopTracks(id : string){
      this.spotifyService.getTopTracks(id)
          .subscribe(tracks => {            
            this.topTracks = tracks;
            console.log(this.topTracks);
          });
  }
}
