import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './stylesheets/CartDisplay.css'

const CartDisplay = ({ amount = 0, text = 'Корзина' }) =>
  <Link to='/cart' className='cart-link'>
    <FontAwesomeIcon icon={faShoppingCart} />
    <span className='cart-title'>{text}</span>
    <span className='cart-elementsCounter'>
      {amount}
    </span>
  </Link>

CartDisplay.propTypes = {
  amount: PropTypes.number,
  text: PropTypes.string
}

export default CartDisplay