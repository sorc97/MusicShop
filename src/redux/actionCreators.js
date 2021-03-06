import C from './constants'

// Fetch actions
export const requestProducts = () => ({
  type: C.REQUEST_PRODUCTS
})

export const receiveProducts = (products, fetchedBy) => ({
  type: C.RECEIVE_PRODUCTS,
  products,
  fetchedBy
})

export const fetchProducts = (url, fetchedBy) => dispatch => {
  dispatch(requestProducts());

  fetch(url, { mode: 'cors' })
    .then(
      res => res.json(),
      err => console.error('An error occurred ', err)
    )
    .then(products => dispatch(receiveProducts(products, fetchedBy)))
}

export const fetchAllProducts = () => dispatch => {
  return dispatch(fetchProducts(`http://nnd1997.ru:50/api/products`, 'main'));
}

export const fetchProductsByParam = (path, param) => dispatch => {
  return dispatch(
    fetchProducts(`http://nnd1997.ru:50/api/products/${path}/${param}`, 'param')
  );
}

export const fetchProductById = id => dispatch => {
  return dispatch(fetchProducts(`http://nnd1997.ru:50/api/products/${id}`, 'id'))
}

// Cart actions
export const addToCart = (id) => ({
  type: C.ADD_TO_CART,
  id
})

export const removeFromCart = (id) => ({
  type: C.REMOVE_FROM_CART,
  id
})

export const changeCartProductAmount = (id, operator) => ({
  type: C.CHANGE_AMOUNT,
  id,
  operator
})

export const toggleSideMenu = () => ({
  type: C.TOGGLE_SIDE_MENU
})