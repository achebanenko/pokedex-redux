const ui = (
	state = { 
		cartOpened: false,
		filterType: 'any',
		filterText: ''
	},
	action
) => {
	switch (action.type) {
		case 'TOGGLE_CART':
			return {
				...state,
				cartOpened: !state.cartOpened
			};
		case 'FILTER_BY_TYPE':
			return {
				...state,
				filterType: action.bytype
			}
		case 'FILTER_BY_TEXT':
			return {
				...state,
				filterText: action.bytext
			}
		default:
			return state;
	}
};

export default ui;