
export interface PokemonDto {
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
