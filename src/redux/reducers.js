import C from './constants'
import {
  initialCart,
} from '../lib/config'

// Product reducer

export const product = (state = {}, action = {}) => {

  switch (action.type) {
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
        state :
        {
          ...state,
          amount: methods[action.operator](state.amount)
        }
    }

    default:
      return state;
  }
}

// Products reducer

export const products = (
  state = {
    list: [],
    cart: initialCart,
    isFetching: false,
    fetchedBy: ""
  },
  action
) => {
  let { cart, list } = state;

  switch (action.type) {
    case C.REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }

    case C.RECEIVE_PRODUCTS:
      return {
        ...state,
        list: Array.isArray(action.products) ?
          action.products : [action.products],
        isFetching: false,
        fetchedBy: action.fetchedBy,
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

// IsSideMenuOpen reducer

export const isSideMenuOpen = (state = false, action) => {
  switch (action.type) {
    case C.TOGGLE_SIDE_MENU:
      return !state;

    default:
      return state;
  }
}