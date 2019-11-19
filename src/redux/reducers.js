import C from './constants'
import equal from 'deep-equal'
import { initialCart } from '../lib/config'

export const product = (state = {}, action = {}) => {

  switch(action.type) {
    case C.ADD_TO_CART:
      return {
        ...state,
        amount: 1
      }
      
    default:
      return state;
  }
}

export const products = (
  state = {
    list: [],
    cart: initialCart
  }, 
  action = {}
) => {
  let { cart, list } = state;

  switch(action.type) {
    case C.PERSONS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: action.products
      }

    case C.FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        list: action.product
      }

    case C.ADD_TO_CART: {
      let newProduct = list.filter(item => 
        item._id === action.id
      )[0]

      let newCartList = cart.map(item =>
        (item._id !== action.id) ? 
          item :
          {
            ...item,
            amount: item.amount + 1
          }
      )

      return {
        ...state,
        cart: (!equal(state.cart, newCartList)) ? 
          newCartList: 
          [
            ...state.cart, 
            product(newProduct, action)
          ]
      }
    }

    case C.REMOVE_FROM_CART:
      return {
        ...state,
        cart: cart.filter(item => item._id !== action.id)
      }

    default:
      return state
  }
}