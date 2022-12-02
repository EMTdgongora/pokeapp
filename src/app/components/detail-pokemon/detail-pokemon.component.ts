import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  menuHidden = true;
  pokemon: unknown;
  @Input() dataPokemon: unknown = 0;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    console.log('data pokemon', this.dataPokemon);
  }
}
