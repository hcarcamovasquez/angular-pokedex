import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeResolver} from './home.resolver';
import {PokemonTableModule} from './pokemon-table/pokemon-table.module';
import {UpdateMoveResolver} from './update-pokemon/update-move/update-move.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      data: HomeResolver
    },
    component: HomeComponent
  },
  {
    path: 'update-pokemon',
    loadChildren: () => import('./update-pokemon/update-pokemon.module').then(m => m.UpdatePokemonModule)
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
