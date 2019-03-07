import { combineReducers } from 'redux';
import pokemons from './pokemons';
import cart from './cart';
import ui from './ui';

const rootReducer = combineReducers({
	pokemons, 
	cart,
	ui
});

export default rootReducer;