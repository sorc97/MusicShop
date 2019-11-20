import React from 'react';
import './stylesheets/AddToCartButton.css'

const AddToCartButton = ({
  addProductToCart, isInCart, id, removeProduct, additionStyle
}) => {

  return(
    /* <button
      className={(!isInCart) ? 'product-button': 'product-button inCart'}
      onClick={() => addProductToCart(id)}
      style={additionStyle}
    >
      В корзину {isInCart && `(${isInCart.amount})` }
    </button> */

    (isInCart) ?
      <button
        className="product-button remove"
        onClick={()=> removeProduct(id)}
        style={additionStyle}
      >
        Убрать из корзины
      </button>:
      <button 
        className="product-button"
        onClick={() => addProductToCart(id)}
        style={additionStyle}
      >
        Добавить в корзину
      </button>
  )
}

export default AddToCartButton;