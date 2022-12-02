import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<{ results: unknown[] }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<any>(`${environment.pokemonapi}pokemon?limit=52`, { observe: 'body', headers: headers })
      .toPromise();
  }

  getDetail(url: string): Promise<unknown> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get<any>(url, { observe: 'body', headers: headers }).toPromise();
  }

  getTypes(): Promise<{ results: unknown[] }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<any>(`${environment.pokemonapi}type?limit=1000`, { observe: 'body', headers: headers })
      .toPromise();
  }

  getType(url: string): Promise<{ results: unknown[] }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get<any>(url, { observe: 'body', headers: headers }).toPromise();
  }

  evolution(id: string): Promise<unknown> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<any>(`${environment.pokemonapi}evolution-chain`, { observe: 'body', headers: headers })
      .toPromise();
  }
}
