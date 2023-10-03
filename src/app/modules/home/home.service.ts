import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, tap} from 'rxjs';
import {EvolutionChain, PokemonDto} from './home.type';
import {PokemonApiService} from '../../services/pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'https://pokeapi.co/api/v2/';

  elementSubject$ = new BehaviorSubject<PokemonDto[]>([]);
  moveElementSubject$ = new BehaviorSubject<PokemonDto | null>(null);
  evolutionElementSubject$ = new BehaviorSubject<EvolutionChain | null>(null); // se utiliza para emitir actualizaciones sobre los elementos

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

  get evolutionElement$(): Observable<EvolutionChain | null > { // metodo que expone este Subject como un Observable
    return this.evolutionElementSubject$.asObservable(); // con esto se pueden suscribirse y actualizarse 
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

  getEvolution(id: number): Observable<boolean> { // llamo el servicio normalmente 
    return this.service.getOneEvolution(id) // invocacion de servicio
      .pipe(
        tap(pokemon => this.evolutionElementSubject$.next(pokemon)), // aca actualizo la data del observable
        map(() => true), // entender porque retorna un booleano.
        catchError(() => {
          return of(false);
        })
      );
  }

}
