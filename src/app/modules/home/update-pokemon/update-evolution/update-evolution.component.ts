import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home.service';
import { EvolutionChainDto } from '../../home.type';

@Component({
  selector: 'app-update-evolution',
  templateUrl: './update-evolution.component.html'
})
export class UpdateEvolutionComponent implements OnInit {

  evolution$?: Observable<EvolutionChainDto | null>;

  constructor(
      private homeService : HomeService
  ) { }

  ngOnInit(): void {
      this.evolution$ = this.homeService.evolutionElement$ // aca solo llamo al observable para obter la data
  }

}
