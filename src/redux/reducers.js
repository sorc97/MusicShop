import C from './constants'

export const product = (state = {}, action = {}) => {
  switch(action.type) {
    case C.ADD_TO_CART:
      return (state._id !== action.id) ?
        state:
        cart(state, action)

    default:
      return state;
  }
}

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

export const cart = (
  state = [
    {
      category: "электрогитары",
      img: "https://www.muztorg.ru/files/4q1/l02/q4u/oao/o80/o0k/8c0/g80/4/4q1l02q4uoaoo80o0k8c0g804.jpg",
      name: "YAMAHA PACIFICA 012 BL",
      price: 15990,
      _id: "5dcbe4abfee11ce04d412910"
    },
    {
      category: "клавишные",
      img: "https://www.muztorg.ru/files/sized/f250x250/5fa/fme/j85/m4o/go8/8wc/w40/kso/8/5fafmej85m4ogo88wcw40kso8.jpg",
      name: "ALESIS V49",
      price: 11400,
      _id: "5dcc0b84d5ca63b2556a0db2"
    },
    {
      category: "dj-оборудование",
      img: "https://www.muztorg.ru/files/sized/f250x250/c5h/fth/vq1/s84/o4g/kgs/40o/cw4/w/c5hfthvq1s84o4gkgs40ocw4w.jpg",
      name: "PIONEER DDJ-200",
      price: 11990,
      _id: "5dcd2940d5ca63b2556a0db5"
    }
  ], 
  action = {}
) =>{
  switch(action.type) {
    case C.ADD_TO_CART:
      return [
        ...state,
        ...action.products.filter(item =>
          item._id === action.id
        )
      ]

    default:
      return state;
  }
}