import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ cart, dispatch }) => (
	<header className="header">
		<div className="logo">
			<Link to="/">
				<img src="/img/pokeball.svg" alt="" />
			</Link>
		</div>
		<div className="cartBtn" onClick={() => { 
			dispatch({ type: 'TOGGLE_CART' })
		}}>
			<div className="cartItemCount">{cart.length}</div>
			<img src="/img/shopping-cart.svg" alt="" />
		</div>
	</header>
);

export default connect(state => state) (Header);