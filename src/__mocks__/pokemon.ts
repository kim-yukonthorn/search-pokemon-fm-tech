import type { Pokemon } from "@/types/pokemon";

export const mockBulbasaur: Pokemon = {
  id: "UG9rZW1vbjowMDE=",
  number: "001",
  name: "Bulbasaur",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  types: ["Grass", "Poison"],
  classification: "Seed Pokémon",
  maxHP: 1071,
  maxCP: 951,
  attacks: {
    fast: [
      { name: "Tackle", type: "Normal", damage: 12 },
      { name: "Vine Whip", type: "Grass", damage: 7 },
    ],
    special: [
      { name: "Power Whip", type: "Grass", damage: 70 },
      { name: "Seed Bomb", type: "Grass", damage: 40 },
      { name: "Sludge Bomb", type: "Poison", damage: 55 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
      types: ["Grass", "Poison"],
    },
  ],
};

export const mockCharmander: Pokemon = {
  id: "UG9rZW1vbjowMDQ=",
  number: "004",
  name: "Charmander",
  image: "https://img.pokemondb.net/artwork/charmander.jpg",
  types: ["Fire"],
  classification: "Lizard Pokémon",
  maxHP: 955,
  maxCP: 841,
  attacks: {
    fast: [
      { name: "Ember", type: "Fire", damage: 10 },
      { name: "Scratch", type: "Normal", damage: 6 },
    ],
    special: [
      { name: "Flame Burst", type: "Fire", damage: 30 },
      { name: "Flamethrower", type: "Fire", damage: 55 },
      { name: "Flame Charge", type: "Fire", damage: 25 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDU=",
      name: "Charmeleon",
      image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      types: ["Fire"],
    },
  ],
};

export const mockSquirtle: Pokemon = {
  id: "UG9rZW1vbjowMDc=",
  number: "007",
  name: "Squirtle",
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  types: ["Water"],
  classification: "Tiny Turtle Pokémon",
  maxHP: 891,
  maxCP: 783,
  attacks: {
    fast: [
      { name: "Bubble", type: "Water", damage: 25 },
      { name: "Tackle", type: "Normal", damage: 12 },
    ],
    special: [
      { name: "Aqua Jet", type: "Water", damage: 25 },
      { name: "Aqua Tail", type: "Water", damage: 45 },
      { name: "Water Pulse", type: "Water", damage: 35 },
    ],
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      name: "Wartortle",
      image: "https://img.pokemondb.net/artwork/wartortle.jpg",
      types: ["Water"],
    },
  ],
};
