import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { pokemons } from './pokemons';

// initial data
const persistedState = { 
	pokemons,
};

const store = createStore(rootReducer, persistedState);

export default store;