const cart = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return state;
		case 'REMOVE_FROM_CART':
			return state;
		default:
			return state;
	}
};

export default cart;