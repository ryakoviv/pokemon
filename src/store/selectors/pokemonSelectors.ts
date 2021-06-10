import {RootState} from '../configureStore';
import {PokemonState} from '../reducers/pokemonReducer';
import {Pokemon} from '../../models/Pokemon';

const getPokemonState = (state: RootState): PokemonState => state.pokemon;

export const selectIsLoading = (state: RootState): boolean => getPokemonState(state).isLoading;
export const selectError = (state: RootState): string|null => getPokemonState(state).error;
export const selectData = (state: RootState): Pokemon|null => getPokemonState(state).data;