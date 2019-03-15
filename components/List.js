import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends React.Component {
	render() {
		const { pokemons, cart, ui } = this.props;

		// Selectors
	  function filteringName(arr, keyword) {
	  	if(keyword) {
	  		return arr.filter(item => item.name.toLowerCase().includes( keyword.toLowerCase() ));
	  	}
	  	return arr;
	  }

	  function filteringType(arr, type) {
	  	if(type !== 'any') {
	  		return arr.filter(item => item.type.indexOf(type) > -1 );
	  	} 
	  	return arr;	
	  }

	  const filteredPokemons = filteringName( 
	  	filteringType(pokemons, ui.filterType), 
	  	ui.filterName 
	  );

		return (
	    // let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes( ui.filterName.toLowerCase() ));
	  	//if(ui.filterType !== 'any') filteredPokemons = filteredPokemons.filter(pokemon => pokemon.type.indexOf(ui.filterType) > -1 );

			filteredPokemons.length > 0 ? (

	      <div className="list">
					{
						filteredPokemons
							.map(pokemon => {
								const inCart = cart.some(item => item.id === pokemon.id);
								return <ListItem key={pokemon.id} details={pokemon} inCart={inCart} />
							})
					}
				</div>

			) : (

	      <div className="list--empty">
	        <img src="/img/razz-berry.svg" alt="" />
	        <p>Awww! We don't have the pokemon you are looking for.</p>
	        <p>Till we get it for you, have this razzberry!</p>
	      </div>

	    )

	  );
	}
}

export default connect(
	state => state
)(List);