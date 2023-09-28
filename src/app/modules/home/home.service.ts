import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, tap} from 'rxjs';
import {PokemonDto} from './home.type';
import {PokemonApiService} from '../../services/pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://pokeapi.co/api/v2/';

  elementSubject$ = new BehaviorSubject<PokemonDto[]>([]);

  constructor(
    private service: PokemonApiService
  ) {
  }

  get elements$(): Observable<PokemonDto[]> {
    return this.elementSubject$.asObservable();
  }


  get(): Observable<boolean> {

    return this.service.findAll()
      .pipe(
        tap(elements => {
          this.elementSubject$.next(elements);
        }),
        map(() => true),
        catchError(() => {
          // toast para indicar que no se pudo obtener la lista
          alert('No se pudo obtener la lista de pokemones')
          return of(true);
        })
      );
  }

}
