import { request, gql } from 'graphql-request'
import {Pokemon} from '../models/Pokemon';

const convertDataToPokemon = (data: any): Pokemon => {
    return {
        species: data.species,
        image: data.sprite,
        height: data.height,
        weight: data.weight,
        types: data.types,
        baseStats: data.baseStats,
        link: data.serebiiPage
    } as Pokemon
}

export function getByName(name: string): Promise<Pokemon> {
    const pokemon = name.toLowerCase();
    const query = gql`
        query($pokemon: Pokemon!) {
          getPokemonDetailsByName(pokemon:$pokemon reverse: true, take:1) {
            num
            species
            types
            abilities { first second hidden }
            baseStats { hp attack defense specialattack specialdefense speed }
            gender { male female }
            height
            weight
            flavorTexts { game flavor }
            sprite
            shinySprite
            backSprite
            shinyBackSprite
            smogonTier
            smogonPage
            serebiiPage
            bulbapediaPage
          }
        }
      `

  return new Promise<Pokemon>((resolve, reject) => {
        request('https://graphqlpokemon.favware.tech/', query, {pokemon})
            .then((data: any) => {
                resolve(convertDataToPokemon(data.getPokemonDetailsByName));
            })
            .catch((reason: any) => {
                let error = 'Something went wrong';
                if (reason?.response?.status === 400) {
                    error = `Pokemon is not found by name "${name}"`
                }
                reject(error);
            });
      }
  );
}
