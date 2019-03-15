import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../actions';

const AddButtonStyled = styled.div`
	&.listItem__addButton--active {
		cursor:not-allowed;
		background:#5898e8;
		color: white;
	}
`;

class AddButton extends React.Component {
	render() {
		const { id, cart, addToCart } = this.props;

		const inCart = cart.findIndex(item => item.id === id) > -1;
		
		return (
			<AddButtonStyled 
				className={`${inCart ? 'listItem__addButton listItem__addButton--active' : 'listItem__addButton'}`} 
				onClick={() => addToCart(id)}
			>
				{inCart ? 'Added' : 'Add to Cart'}
			</AddButtonStyled>
		)
	}
}

export default connect (
	state => ({
		cart: state.cart,
	}), {
		addToCart,
	}
)(AddButton);