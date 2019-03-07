import React from 'react';
import styled from 'styled-components';

const AddButtonStyled = styled.div`
	&.listItem__addButton--active {
		cursor:not-allowed;
		background:#5898e8;
		color: white;
	}
`;

class AddButton extends React.Component {
	render() {
		// const addButtonText = this.props.inCart ? 'Added' : 'Add to Cart';
		// const addButtonAction = this.props.inCart ? null : () => this.props.addToCart(pokemon.id);

		return (
			<AddButtonStyled 
				className={`${this.props.inCart ? 'listItem__addButton listItem__addButton--active' : 'listItem__addButton'}`} 
				onClick={() => this.props.addToCart(this.props.id)}
			>
				{this.props.inCart ? 'Added' : 'Add to Cart'}
			</AddButtonStyled>
		)
	}
}

export default AddButton;