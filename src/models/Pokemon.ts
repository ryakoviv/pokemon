import {PokemonBaseStats} from "./PokemonBaseStats";

export interface Pokemon {
    species: string
    image: string
    height: number
    weight: number
    types: string[]
    link: string
    baseStats: PokemonBaseStats
}
