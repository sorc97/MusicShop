import C from './constants'
import { 
  initialCart, 
  initialProductsPerPage 
} from '../lib/config'

export const product = (state = {}, action = {}) => {

  switch(action.type) {
    case C.ADD_TO_CART:
      return {
        ...state,
        amount: 1
      }

    case C.CHANGE_AMOUNT: {
      let methods = {
        "+": a => a + 1,
        "-": a => a - 1
      }

      return (state._id !== action.id) ?
        state:
        {
          ...state,
          amount: methods[action.operator](state.amount)
        }
    }
      
    default:
      return state;
  }
}

export const products = (
  state = {
    list: [],
    cart: initialCart,
    productsPerPage: initialProductsPerPage,
    isFetching: false,
    isMainDataFetched: false
  }, 
  action
) => {
  let { cart, list } = state;

  switch(action.type) {
    case C.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }

    case C.PRODUCTS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: action.products,
        isFetching: false,
        isMainDataFetched: true
      }

    case C.FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        list: [
          action.product
        ]
      }

    case C.FETCH_PRODUCTS_BY_PARAM:
      console.log(action.products)
      return {
        ...state,
        list: action.products
      }

    case C.ADD_TO_CART: {
      let newProduct = list.filter(item => 
        item._id === action.id
      )[0]

      return {
        ...state,
        cart: [
          ...cart,
          product(newProduct, action)
        ]
      }
    }

    case C.REMOVE_FROM_CART:
      return {
        ...state,
        cart: cart.filter(item => item._id !== action.id)
      }

    case C.CHANGE_AMOUNT:
      return {
        ...state,
        cart: cart.map(item => product(item, action))
      }

    default:
      return state
  }
}