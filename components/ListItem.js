import React from 'react';
import { Link } from 'react-router-dom';

import AddButton from './AddButton';

class Item extends React.Component {

	render() {
		// const listItemClassName = this.props.inCart ? 'listItem listItem--added' : 'listItem';
		
		const pokemon = this.props.details;
		
		return (	
			<div className={`${this.props.inCart ? 'listItem listItem--added' : 'listItem'}`} key={pokemon.id}>
				<Link to={`/${pokemon.name}`}>
					<img src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
				</Link>

				<h3 className="listItem__name">
					<Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
				</h3>

				<div className="listItem__price">
					<div className="listItem__priceTxt">$40</div>
				</div>
				
				<AddButton addToCart={this.props.addToCart} id={pokemon.id} inCart={this.props.inCart} />
			</div>
		)
	}

}

export default Item;