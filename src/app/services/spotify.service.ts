import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) { }

  getQuery(query : string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD19IW0g8Pz97P6oLt_vQ1JS4ygCSONS6puqgU_tjxyfKbA4eY6_s8mJBd_FA9hhq6AE9IgmWhgTMaepI5ogyMLoXzQ7pV9mlQLoFCFA1ozJv7vH_pz'
    });

    return this.http.get(url, { headers });
  }

  getInitialMaterial(){
    return this.getQuery('browse/new-releases')
        .pipe(map((data: any) => data['albums'].items));
  }

  getArtists(artistId : string){    
    return this.getQuery(`search?q=${ artistId }&type=artist`)
        .pipe(map((data:any) => data['artists'].items));
  }

  getArtist(artistId : string){
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId : string){
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
        .pipe(map((tracks: any) => tracks['tracks']));
  }
}
