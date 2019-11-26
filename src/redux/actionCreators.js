import C from './constants'

export const requestProducts = () => ({
  type: C.REQUEST_PRODUCTS
}) 

export const receiveProducts = (products, isMain) => ({
  type: C.RECEIVE_PRODUCTS,
  products,
  isMain
})

export const fetchProducts = (url, isMain) => dispatch => {
  console.log("Preparing to fentch ....");

  dispatch(requestProducts());

  fetch(url)
    .then(
      res => res.json(),
      err => console.error('An error occurred ', err)
    )
    .then(products => dispatch(receiveProducts(products, isMain)))
}

export const fetchAllProducts = () => dispatch => {
  return dispatch(fetchProducts(`/api/products`, true));
}

export const fetchProductsByParam = (path, param) => dispatch => {
  return dispatch(fetchProducts(`/api/products/${path}/${param}`))
}

export const fetchProductById = id => dispatch => {
  return dispatch(fetchProducts(`/api/products/${id}`))
}

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