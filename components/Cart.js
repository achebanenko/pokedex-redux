import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, toggleCart, changeQuantity } from '../actions';

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

const CartItem = ({ item, removeFromCart, changeQuantity }) => {
	return (
		<div className="cartListItem" key={item.id}>
			<div className="cartListItem__removeBtn" onClick={() => removeFromCart(item.id)}>
				<img src="/img/error.svg"/>
			</div>
			<img className="cartListItem__image" src={item.image} alt={item.name} title={item.name} />
			<CartMgmt>
				<span className="sumButton" onClick={() => changeQuantity('minus',item.id)}>-</span>
				<span className="sumQuantity">{item.quantity}</span>
				<span className="sumButton" onClick={() => changeQuantity('plus',item.id)}>+</span>
			</CartMgmt>
		</div>
	)
};

class Cart extends React.Component {
	render() {
		const { pokemons, cart, ui, toggleCart, removeFromCart, changeQuantity } = this.props;

		// array of objects
		// ?Maybe it's better to keep items - not only ids inside cart storeState
		const cartItems = cart.map(item => {
			return { 
				...pokemons.find(p => p.id === item.id),
				quantity: item.quantity,
			};
		});
		
		// show element
		const cartElement = document.querySelector('.cart');
  	cartElement && cartElement.classList.toggle('cart--active', ui.cartOpened);

  	// calculate check
		const cartIds = Object.keys(cartItems);
		const amount = cartIds.reduce((prevTotal, index) => {
			prevTotal += cart[index].quantity * 40;
			return prevTotal;
		}, 0);

		return (
			<div className="cart">
				<div className="cartHeading">
					My Cart <strong>{`${amount || ''}`}</strong>
				</div>
				<div className="cartCloseBtn" onClick={() => toggleCart()}>Close</div>

				{ 
					cartItems.length > 0 ? (

						<div className="cartList">
							{cartItems.map( item => 
								<CartItem 
									key={item.id} item={item} 
									removeFromCart={removeFromCart} changeQuantity={changeQuantity}
								/> 
							)}
						</div>

					) : (

						<div className="cartEmpty">Your cart is empty.</div>

					) 
				}
				
			</div>
		)
	}
}

export default connect(
	state => state,
	{
		removeFromCart,
		toggleCart,
		changeQuantity,
	}
)(Cart);