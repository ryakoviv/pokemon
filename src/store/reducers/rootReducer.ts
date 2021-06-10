import { combineReducers } from '@reduxjs/toolkit'
import pokemon from './pokemonReducer';

const rootReducer = combineReducers({
    pokemon
});

export default rootReducer;