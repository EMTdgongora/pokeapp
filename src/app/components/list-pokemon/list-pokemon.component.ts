import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import csvDownload from 'json-to-csv-export';

interface PokeDta {
  url?: string;
  name?: string;
  image?: string;
  id: number;
}
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  pokemons: Array<any> = [];
  types: Array<any> = [];
  filters: Array<any> = [];
  indexPokemon: number = 0;
  detailPok: PokeDta = {
    image: '',
    url: '',
    name: '',
    id: 0,
  };

  constructor(private pokemonService: PokemonService) {}

  async ngOnInit(): Promise<any> {
    this.getAll();
    this.getTypes();
  }

  async getAll(): Promise<any> {
    try {
      const response = await this.pokemonService.getAll();
      this.pokemons = response.results;

      this.pokemons = this.pokemons.map((e) => {
        return this.mapInfo(e);
      });
      const getPokemon = await this.pokemonService.getDetail('hdsjh');
      console.log('response', getPokemon);
    } catch (e) {
      console.log(e);
    }
  }

  mapInfo(e: any) {
    e.id = e.url.substring(0, e.url.length - 1);
    var n = e.id.lastIndexOf('/');
    var result = e.id.substring(n + 1);
    e.id = result;

    if (String(e.id).length === 1) {
      e.number = `00${e.id}`;
    } else if (String(e.id).length === 2) {
      e.number = `0${e.id}`;
    } else {
      e.number = e.id;
    }

    e.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e.number}.png`;
    return e;
  }

  async getTypes(): Promise<any> {
    try {
      const response = await this.pokemonService.getTypes();
      this.types = response.results;
      console.log('Types', this.types);
    } catch (e) {
      console.log(e);
    }
  }

  async changeType(item: any) {
    try {
      this.filters = [];
      this.filters.push(item.name);
      const response: any = await this.pokemonService.getType(item.url);
      const array = Array.from(response.pokemon).map((item: any) => item.pokemon);
      this.pokemons = array.map((e) => {
        return this.mapInfo(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  deleteAllFilter() {
    this.filters = [];
    this.getAll();
  }

  async pokemonSelected(po: { url: string; name: string; image: string }): Promise<void> {
    console.log(po);
    const pok = (await this.pokemonService.getDetail(po.name)) as {};
    this.detailPok = { ...pok, image: po.image } as PokeDta;
    console.log('poked', this.detailPok);
  }

  download() {
    const dataToConvert = {
      data: this.pokemons,
      filename: 'pokemos',
      delimiter: ',',
      headers: ['Nombre', 'URL', 'NUMERO', 'NUMERO', 'IMAGEN'],
    };

    csvDownload(dataToConvert);
  }
}
