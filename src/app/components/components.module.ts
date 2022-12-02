import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EvolutionPokemonComponent } from './evolution-pokemon/evolution-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [DetailPokemonComponent, EvolutionPokemonComponent, ListPokemonComponent],
  imports: [CommonModule],
  exports: [DetailPokemonComponent, EvolutionPokemonComponent, ListPokemonComponent, ComponentsRoutingModule],
})
export class ComponentsModule {}
