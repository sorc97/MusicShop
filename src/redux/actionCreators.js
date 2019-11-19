import C from './constants'

export const productsFetchDataSuccess = (products) => ({
  type: C.PERSONS_FETCH_DATA_SUCCESS,
  products
})

export const fetchProductByIdSuccess = (product) => ({
  type: C.FETCH_PRODUCT_BY_ID,
  product
})

export const productsFetchData = url => dispatch => {
  fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res
    })
    .then(res => res.json())
    .then(products => dispatch(productsFetchDataSuccess(products)))
}

export const fetchProductById = id => dispatch => {
  fetch(`/api/products/${id}`)
    .then(res => res.json())
    .then(product => dispatch(fetchProductByIdSuccess(product)))
    .catch(err => console.error(err))
}

export const addToCart = (id) => ({
  type: C.ADD_TO_CART,
  id
})

export const removeFromCart = (id) => ({
  type: C.REMOVE_FROM_CART,
  id
})