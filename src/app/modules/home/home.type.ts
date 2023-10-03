export interface PokemonDto {
  id: number;
  name: string;
  img: string;
}

export interface PokemonResultDto {
  name: string;
  url: string;
}

export interface PokemonResponseDto {
  count: number;
  next: string;
  previous?: string;
  results: PokemonResultDto[];
}

export interface PokemonResponseMoveDto {
  count: number;
  next: string;
  previous?: string;
  results: PokemonMoveResultDto[];
}

export interface PokemonMoveResultDto {
  name: string;
  url: string;
}

export interface PokemonMoveDto {
  name: string;

}

export interface PokemonSpeciesDto { // raiz
  name: string;
  url : string;
}

export interface Evolution { // evolves_to
  is_baby: boolean;
  species: PokemonSpeciesDto;
}

export interface EvolutionChain { // chain 
  is_baby: boolean;
  species: PokemonSpeciesDto;
  evolves_to: Evolution[];
}