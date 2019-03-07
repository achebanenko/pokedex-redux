import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { pokemons as myPokemons } from './pokemons';


const persistedState = { 
  pokemons: myPokemons
};

const store = createStore(rootReducer, persistedState);

export default store;