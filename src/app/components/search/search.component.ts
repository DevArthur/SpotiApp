import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {  

  artists: any[] = [];
  loading: boolean | undefined;
  
  constructor(private spotifyService : SpotifyService){    
  }

  buscar(termino : string) {

    this.loading = true;
    this.spotifyService.getArtists(termino)
        .subscribe((data: any) => {

          // TODO: quitar el 'loading' cuando se borren
          // los parametros de busqueda.
          if(termino.length == 0){
            this.loading = false;  
          }

          this.artists = data;
          console.log(this.artists);
          this.loading = false;  
        });
  }  
}
