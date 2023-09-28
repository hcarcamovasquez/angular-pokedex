import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './pokemon-table.component';



@NgModule({
  declarations: [
    PokemonTableComponent
  ],
  exports: [
    PokemonTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonTableModule { }
