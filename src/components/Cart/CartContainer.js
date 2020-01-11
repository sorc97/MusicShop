import { connect } from 'react-redux'
import Cart from './Cart'
import {
  removeFromCart,
  changeCartProductAmount
} from '../../redux/actionCreators'

const CartContainer = connect(
  ({ products: { cart } }) => ({
    productsList: cart,
    finalPrice: cart.reduce((prev, next) =>
      prev + next.price * next.amount, 0
    )
  }),
  dispatch => ({
    removeProduct(id) {
      dispatch(removeFromCart(id));
    },
    changeAmount(id, operator) {
      dispatch(changeCartProductAmount(id, operator))
    }
  })
)(Cart)

export default CartContainer