import C from './constants'

export const products = (state = [], action = {}) => {
  switch(action.type) {
    case C.PERSONS_FETCH_DATA_SUCCESS:
      return action.persons

    default:
      return state
  }
}
