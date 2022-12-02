import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getpokemons() {
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const promesa = this.httpClient
      .get<any>(`${environment.pokemonapi}pokemon?limit=1000`, { observe: 'response', headers: headers })
      .toPromise();
  }
}
