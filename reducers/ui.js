const ui = (
	state = { 
		cartOpened: false,
		filterType: 'any',
		filterName: ''
	},
	action
) => {
	switch (action.type) {
		case 'TOGGLE_CART':
			return { ...state, cartOpened: !state.cartOpened };
		case 'FILTER_BY_TYPE':
			return { ...state, filterType: action.bytype }
		case 'FILTER_BY_NAME':
			return { ...state, filterName: action.byname }
		default:
			return state;
	}
};

export default ui;