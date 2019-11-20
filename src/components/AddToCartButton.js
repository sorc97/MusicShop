import React from 'react';
import classNames from 'classnames'
import './stylesheets/AddToCartButton.css'

const AddToCartButton = ({
  addProductToCart, isInCart, id, additionStyle
}) => {

  const classes = classNames(
    'product-button',
    isInCart && 'inCart'
  )

  return(
    <button
      className={classes}
      onClick={() => addProductToCart(id)}
      style={additionStyle}
    >
      В корзину {isInCart && `(${isInCart.amount})` }
    </button>
  )
}

export default AddToCartButton;