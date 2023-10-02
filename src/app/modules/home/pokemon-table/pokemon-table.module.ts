import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './pokemon-table.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';



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
    RouterModule
  ]
})
export class PokemonTableModule { }
