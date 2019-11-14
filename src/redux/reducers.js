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
