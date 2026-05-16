export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonEvolution {
  id: string;
  name: string;
  image: string;
  types: string[];
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  classification: string;
  maxHP: number;
  maxCP: number;
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions: PokemonEvolution[] | null;
}

export interface GetPokemonData {
  pokemon: Pokemon | null;
}

export interface GetPokemonVars {
  name: string;
}
