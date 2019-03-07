/*
toggleCart() {
  const cart = document.querySelector('.cart');
  cart.classList.toggle('cart--active');
}
*/

export const toggleCart = () => {
	return {
		type: 'TOGGLE_CART'
	}
}

/*
addToCart(id) {
  const itemIndex = this.state.cart.findIndex(item => item.id === id);

  if(itemIndex === -1) {
    pokemon.quantity = 1;
    const cart = [...this.state.cart, pokemon];
    this.setState({ cart });
  }
}
*/

export const addToCart = (data) => {
	return {
		type: 'ADD_TO_CART',
		payload: data
	}
}

/*
removeFromCart(id) {
  if(itemIndex !== -1) {
    const cart = [...this.state.cart.slice(0, itemIndex), ...this.state.cart.slice(itemIndex + 1)];
    this.setState({ cart });
  }
}
*/

export const removeFromCart = (data) => {
	return {
		type: 'REMOVE_FROM_CART',
		payload: data
	}
}