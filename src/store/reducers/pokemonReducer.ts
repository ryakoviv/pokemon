import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchByName} from '../thunks/pokemonThunk';
import {Pokemon} from "../../models/Pokemon";

export interface PokemonState {
    isLoading: boolean;
    isSuccess: boolean;
    error: string|null;
    data: Pokemon|null;
}

const initialState: PokemonState = {
    isLoading: false,
    isSuccess: false,
    error: null,
    data: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        clear: (state) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchByName.pending, (state: PokemonState) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchByName.fulfilled, (state: PokemonState, action: PayloadAction<Pokemon>) => {
                state.isLoading = false;
                state.data = action.payload
            })
            .addCase(fetchByName.rejected, (state: PokemonState, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.error.message as string;
            });
    },
});

export default pokemonSlice.reducer;