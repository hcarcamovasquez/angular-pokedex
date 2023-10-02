import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateMoveComponent} from './update-move/update-move.component';
import {UpdateLocationComponent} from './update-location/update-location.component';
import {UpdateEvolutionComponent} from './update-evolution/update-evolution.component';
import {RouterModule, Routes} from '@angular/router';
import {UpdateMoveResolver} from './update-move/update-move.resolver';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'move/:id',
    resolve: {
      data: UpdateMoveResolver
    },
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
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UpdatePokemonModule {
}
