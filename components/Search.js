import React from 'react';


class Search extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		const filterText = this.searchInput.value;

		this.setState({
			filterText
		})

		if(filterText.length > 0) {
  		const filteredPokemons = this.props.pokemons.filter(pokemon => pokemon.name.includes( filterText ));

  		this.setState({
				pokemons: filteredPokemons
			})
  	}
	}

  render() {
		return (
			<div className="filterInput">
				<input onChange={this.handleChange} ref={(input) => {this.searchInput = input}} placeholder="Gotta Catch'em all" />
			</div>
		)
	}

}

export default Search;