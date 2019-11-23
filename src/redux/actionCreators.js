import C from './constants'

export const productsFetchDataSuccess = (products) => ({
  type: C.PRODUCTS_FETCH_DATA_SUCCESS,
  products
})

export const fetchProductByIdSuccess = (product) => ({
  type: C.FETCH_PRODUCT_BY_ID,
  product
})
/* 
export const requestPosts = () => ({
  type: C.REQUEST_POSTS
}) 
*/

export const productsFetchData = url => dispatch => {
  console.log("Preparing to fentch ....");
  dispatch({
    type: C.REQUEST_POSTS
  })

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

export const fetchProductsByParam = (path, param) => dispatch => {
  fetch(`/api/products/${path}/${param}`)
    .then(
      res => res.json(),
      err => console.error('An error occurred')
    )
    .then(products => dispatch({
      type: C.FETCH_PRODUCTS_BY_PARAM,
      products
    }))
}

export const fetchProductById = id => dispatch => {
  fetch(`/api/products/${id}`)
    .then(
      res => res.json(),
      err => console.error('An error occurred', err)
    )
    .then(product => dispatch(fetchProductByIdSuccess(product)))
    // .catch(err => console.error(err))
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