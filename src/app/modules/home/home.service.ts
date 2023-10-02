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
  moveElementSubject$ = new BehaviorSubject<PokemonDto | null>(null);

  constructor(
    private service: PokemonApiService
  ) {
  }

  get moveElement$(): Observable<PokemonDto | null> {
    return this.moveElementSubject$.asObservable();
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
          alert('No se pudo obtener la lista de pokemones');
          return of(true);
        })
      );
  }


  getOne(id: number): Observable<boolean> {
    return this.service.getOne(id)
      .pipe(
        tap(pokemon => this.moveElementSubject$.next(pokemon)),
        map(() => true),
        catchError(() => {
          return of(false);
        })
      );
  }

}
