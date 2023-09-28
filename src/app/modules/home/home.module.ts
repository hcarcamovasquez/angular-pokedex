import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResolver} from './home.resolver';
import {PokemonTableModule} from './pokemon-table/pokemon-table.module';

const routes: Routes = [
  {
    path: '',
    resolve: {
      data: HomeResolver
    },
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PokemonTableModule
  ]
})
export class HomeModule {
}
