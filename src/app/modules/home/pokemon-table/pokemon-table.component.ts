import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html'
})
export class PokemonTableComponent implements OnInit {

  constructor(
    protected readonly service: HomeService
  ) {
  }

  ngOnInit(): void {
  }

}
