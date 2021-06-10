import {RootState} from '../configureStore';

export const selectIsLoading = (state: RootState): boolean => state.pokemon.isLoading