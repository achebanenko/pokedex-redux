import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
import ListItem from './ListItem';

class Single extends React.Component {
	render() {
		// match is router
		const { pokemons, match } = this.props;
		const pokemon = pokemons.find(p => p.name === match.params.name);
		
		let similarPokemons = [];
		let similarTypes = null;
		if(typeof pokemon !== 'undefined') {
			const types = pokemon.type.split(',');
			types.forEach(type => {
				similarPokemons.push( ...pokemons.filter(p => p.type.indexOf(type) > -1 && p.name !== pokemon.name) );
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
						state: {referrer: match.params.name}
					}} />

				) : false }


				{ typeof pokemon !== 'undefined' ? (

					<SingleItem pokemon={pokemon} />
					
				) : false }

				
				{ similarPokemons.length > 0 ? (

					<div className="similarList">
						<h2>
							Similar
							{similarTypes}
						</h2>
						
						<div className="list">
							{
								similarPokemons.map(similar => <ListItem key={similar.id} details={similar} />)
							}
						</div>
					</div>

				) : false }

			</div>
		)
	}
}

export default connect (
	state => ({
		pokemons: state.pokemons,
	})
)(Single);