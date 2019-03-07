import React from 'react';
//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CartMgmt = styled.div`
	margin:5px auto 0;
	text-align:center;
	.sumQuantity {
		margin:0 5px;
		font-weight: bold;
	}
	.sumButton {
		padding:2px 5px;
		color:white;
		background:#5898e8;
		border-radius:3px;
		&:hover {
			cursor:pointer;
		}
	}
`;

class Cart extends React.Component { 
	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	changeQuantity = (id, action) => {
		const itemIndex = this.props.cart.findIndex(item => item.id === id);
		//const item = this.props.cart[itemIndex];

		const cart = [...this.props.cart];

		if(action === 'plus') {
			cart[itemIndex].quantity += 1;
		}

		if(action === 'minus') {
			cart[itemIndex].quantity -= 1;
		}

		if(cart[itemIndex].quantity < 1) {
			this.props.removeFromCart(id);
		}

		this.setState({
			cart
		});
	};

	renderItem(item) {
		return(
			<div className="cartListItem" key={item.id}>
				<div className="cartListItem__removeBtn" onClick={() => {
					dispatch({
						type: 'REMOVE_FROM_CART',
						id: item.id
					});
				}}>
					<img src="img/error.svg"/>
				</div>
				<img className="cartListItem__image" src={item.image} alt={item.name} title={item.name} />
				<CartMgmt>
					<span className="sumButton" onClick={() => {
						dispatch({
							type: 'PLUS_QUANTITY',
							id: item.id
						})
					}}>-</span>
					<span className="sumQuantity">{item.quantity}</span>
					<span className="sumButton" onClick={() => {
						dispatch({
							type: 'MINUS_QUANTITY',
							id: item.id
						})
					}}>+</span>
				</CartMgmt>
			</div>
		)
	}

	render() {
		const { cart, ui, dispatch } = this.props;

		const cartElement = document.querySelector('.cart');
  	// ui.cartOpened ? cartElement.classList.add('cart--active') : cartElement.classList.remove('cart--active');
  	cartElement && cartElement.classList.toggle('cart--active', ui.cartOpened);


		const cartIds = Object.keys(cart);
		const amount = cartIds.reduce((prevTotal, index) => {
			prevTotal += cart[index].quantity * 40;
			return prevTotal;
		}, 0);

		return (
			<div className="cart">
				<div className="cartHeading">My Cart {`${amount || ''}`}</div>
				<div className="cartCloseBtn" onClick={() => {
					dispatch({ type: 'TOGGLE_CART' });
				}}>Close</div>
				{ cart.length > 0 ? (
					<div className="cartList">
						{cart.map( this.renderItem )}
					</div>
				) : false } 

				{ cart.length === 0 ? (
						<div className="cartEmpty">Your cart is empty.</div>
				) : false }
			</div>
		)
	}
}

export default connect(state => state) (Cart);