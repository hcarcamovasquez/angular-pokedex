import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, map, Observable, switchMap, tap} from 'rxjs';
import {PokemonDto, EvolutionChainDto, PokemonMoveDto, PokemonResponseDto, PokemonResponseMoveDto} from '../modules/home/home.type';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private url = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<PokemonDto[]> {
    return this.http.get<PokemonResponseDto>(this.url.concat('pokemon?limit=8'))
      .pipe(
        map((response) => response.results),
        map((pokemons) => pokemons.map((pokemon) => pokemon.url)),
        switchMap(urls => combineLatest([...urls.map(url => this.getOne(url))]))
      );
  }

  getOne(id?: number | string): Observable<PokemonDto> {
    return this.http.get<PokemonDto>(typeof id === 'string' ? id : this.url.concat(`pokemon/${id}`))
      .pipe(
        map((response) => this.toPokemonDto(response))
      );
  }

  findAllMoves(): Observable<PokemonMoveDto[]> {
    return this.http.get<PokemonResponseMoveDto>(this.url.concat('move?limit=8'))
      .pipe(
        map((response) => response.results),
        map((moves) => moves.map((move) => move.url)),
        switchMap(urls => combineLatest([...urls.map(url => this.getOneMove(url))]))
      );
  }

  getOneMove(id?: number | string): Observable<PokemonMoveDto> {
    return this.http.get<PokemonMoveDto>(typeof id === 'string' ? id : this.url.concat(`move/${id}`))
      .pipe(
        map((response) => this.toMoveDto(response))
      );
  }

  getEvolution(id?: number | string): Observable<EvolutionChainDto> {
    return this.http.get<EvolutionChainDto>(typeof id === 'string' ? id : this.url.concat(`evolution-chain/${id}/`))
      .pipe(
        map((response) => this.toEvolutionDto(response))
      );
  }

  private toPokemonDto(pokemon: any): PokemonDto {
    return {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon?.sprites?.front_default
    } as PokemonDto;
  }

  private toMoveDto(move: any): PokemonMoveDto {
    return {
      name: move.name
    } as PokemonMoveDto;
  }

  private toEvolutionDto(evolution : any) : EvolutionChainDto{
    return {
      is_baby : evolution.chain.is_baby,
      evolves_to : evolution.chain.evolves_to,
      species :  evolution.chain.species
    } as EvolutionChainDto;

  }

}
