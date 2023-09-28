import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateMoveComponent} from './update-move/update-move.component';
import {UpdateLocationComponent} from './update-location/update-location.component';
import {UpdateEvolutionComponent} from './update-evolution/update-evolution.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'move/:id',
    component: UpdateMoveComponent
  }
];

@NgModule({
  declarations: [
    UpdateMoveComponent,
    UpdateLocationComponent,
    UpdateEvolutionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdatePokemonModule {
}
