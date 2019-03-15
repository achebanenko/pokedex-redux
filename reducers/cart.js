const cart = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			if(state.findIndex(item => item.id === action.id) === -1) {
		    return [...state, {id: action.id, quantity: 1}];
		  }
		  return state;

		case 'REMOVE_FROM_CART':
			const index = state.findIndex(item => item.id === action.id);
			if(index > -1) {
				return [...state.slice(0, index), ...state.slice(index + 1)];
			}
			return state;

		// duplicate declaration index without brackets
		case 'CHANGE_QUANTITY': {
			const index = state.findIndex(item => item.id === action.id);
			const cart = [...state];
			if(action.operation === 'plus') cart[index].quantity += 1;
			if(action.operation === 'minus') cart[index].quantity -= 1;
			if(cart[index].quantity < 1) {
				//return [...cart.slice(0, index), ...cart.slice(index + 1)];
				return cart.filter((item, i) => i !== index);
			}
			return cart;
		}

		default:
			return state;
	}
};

export default cart;
