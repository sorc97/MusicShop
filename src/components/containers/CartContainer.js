import { connect } from 'react-redux'
import Cart from '../Cart'
import {
  removeFromCart,
  changeCartProductAmount
} from '../../redux/actionCreators'

const CartContainer = connect(
  ({ products: {cart} }) => ({
    products: cart
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