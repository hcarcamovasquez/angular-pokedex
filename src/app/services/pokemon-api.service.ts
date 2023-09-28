import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, map, Observable, switchMap} from 'rxjs';
import {PokemonDto, PokemonResponseDto} from '../modules/home/home.type';

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

  private toPokemonDto(pokemon: any): PokemonDto {
    return {
      name: pokemon.name,
      img: pokemon?.sprites?.front_default
    } as PokemonDto;
  }

}
