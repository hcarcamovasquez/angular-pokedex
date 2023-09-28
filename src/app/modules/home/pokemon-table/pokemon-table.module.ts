import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './pokemon-table.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterLinkWithHref} from '@angular/router';



@NgModule({
  declarations: [
    PokemonTableComponent
  ],
  exports: [
    PokemonTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLinkWithHref
  ]
})
export class PokemonTableModule { }
