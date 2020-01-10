import { connect } from 'react-redux'
import { findById } from '../../lib/array-helpers'
import {
  addToCart,
  removeFromCart
} from '../../redux/actionCreators'
import ToggleButton from '../ToggleButton'

const mapStateToProps = (
  { products: { cart } },
  { id, style, className }
) => ({
  condition: !!findById(cart, id),
  positiveText: 'Добавить в корзину',
  negativeText: 'Убрать из корзины',
  style,
  className
})

const mapDispatchtoProps = (dispatch, { id }) => ({
  onPositiveClick() {
    dispatch(addToCart(id))
  },
  onNegativeClick() {
    dispatch(removeFromCart(id))
  }
})

const AddToCartButton = connect(
  mapStateToProps,
  mapDispatchtoProps
)(ToggleButton)

export default AddToCartButton;