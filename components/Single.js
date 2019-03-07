import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import SingleItem from './SingleItem';
import List from './List';

class Single extends React.Component {
	render() {
		const pokemon = this.props.pokemons.find(p => p.name === this.props.match.params.name);
		const inCart = this.props.cart.some(item => item.name === pokemon.name);

		let similarPokemons = [];
		let similarTypes = null;
		if(typeof pokemon !== 'undefined') {
			const types = pokemon.type.split(',');
			types.forEach(type => {
				similarPokemons.push( ...this.props.pokemons.filter(p => p.type.indexOf(type) > -1 && p.name !== pokemon.name) );
			});

			similarTypes = types.map(type => <span key={type}>
					&nbsp;<Link to={`/type/${type}`}>#{type}</Link>
				</span>);
		}

		return (
			<div className="singleContent">

				{ typeof pokemon === 'undefined' ? (

					<Redirect to={{
						pathname: "/notmatched",
						state: {referrer: this.props.match.params.name}
					}} />

				) : false }


				{ typeof pokemon !== 'undefined' ? (

					<SingleItem pokemon={pokemon} inCart={inCart} addToCart={this.props.addToCart} />
					
				) : false }

				
				{ similarPokemons.length > 0 ? (

					<div className="similarList">
						<h2>
							Similar
							{similarTypes}
						</h2>
						
						<List pokemons={similarPokemons} cart={this.props.cart} addToCart={this.props.addToCart} />
					</div>

				) : false }

			</div>
		)
	}
}

export default Single;