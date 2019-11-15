import C from './constants'

export const products = (state = [], action = {}) => {
  switch(action.type) {
    case C.PERSONS_FETCH_DATA_SUCCESS:
      return action.products

    case C.FETCH_PRODUCT_BY_ID:
      return [
        action.product
      ]

    default:
      return state
  }
}

export const sort = (state = 'none', action = {}) => {
  switch(action.type) {
    case C.CHANGE_SORT:
      return action.sortValue

    default:
      return state;
  }
}