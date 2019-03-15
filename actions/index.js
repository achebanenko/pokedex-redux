// Cart
export const addToCart = (id) => (
  {
    type: 'ADD_TO_CART',
    id,
  }
);

export const removeFromCart = (id) => (
	{
    type: 'REMOVE_FROM_CART',
  	id,
  }
);

export const changeQuantity = (operation, id) => (
  {
    type: 'CHANGE_QUANTITY',
    operation,
    id,
  }
);


// UI and Filter
export const toggleCart = () => (
  {
    type: 'TOGGLE_CART'
  }
);

export const filterByType = (bytype) => (
  {
    type: 'FILTER_BY_TYPE',
    bytype,
  }
);

export const filterByName = (byname) => (
  {
    type: 'FILTER_BY_NAME',
    byname,
  }
);