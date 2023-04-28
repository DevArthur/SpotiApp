import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string = '';

  constructor(private spotifyService : SpotifyService){
    
    this.loading = true;
    this.error = false;
    this.spotifyService.getInitialMaterial().subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio ) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorServicio.error.error.message;
      });        
    }   
  }

