import React from 'react';
import styled from 'styled-components';

import AddButton from './AddButton';

const SingleItemStyled = styled.div`
	margin:40px 0;
	overflow: auto;
	.image {
		float: left;
		margin-right: 5%;
		width: 45%;
		img {
			width: 100%;
		}
	}
	.info {
		float:left;
		padding:20px;
		width: 50%;
		background:#fff;
		box-shadow: 0px 1px 2px 1px #e1e1e1;
	}
	&:after {
		clear: both;
	}
`;

class SingleItem extends React.Component {
	render() {
		const pokemon = this.props.pokemon;

		return (
			<SingleItemStyled>
				<div className="image">
					<img src={pokemon.image} alt={pokemon.name} />
				</div>
				<div className="info">
					<h1>{pokemon.name}</h1>
					<p>
						Info
					</p>
					<AddButton addToCart={this.props.addToCart} id={pokemon.id} inCart={this.props.inCart} />
				</div>
			</SingleItemStyled>
		)
	}
}

export default SingleItem;