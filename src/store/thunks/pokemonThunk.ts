import {createAsyncThunk} from "@reduxjs/toolkit";
import {getByName} from "../../api/pokemonAPI";

export const fetchByName = createAsyncThunk(
    'pokemon/fetchByName',
    async (name: string) => {
        return await getByName(name);
    }
);