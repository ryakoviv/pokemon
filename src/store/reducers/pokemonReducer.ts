import {createSlice} from '@reduxjs/toolkit';
import {fetchByName} from '../thunks/pokemonThunk';

export interface PokemonState {
    isLoading: boolean;
    isSuccess: boolean;
    error: string|null;
    data: object[];
}

const initialState: PokemonState = {
    isLoading: false,
    isSuccess: false,
    error: null,
    data: [],
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        clear: (state) => {
            state.data = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchByName.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchByName.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(fetchByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default pokemonSlice.reducer;