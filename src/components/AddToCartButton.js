import React from 'react';
import './stylesheets/AddToCartButton.css'

const AddToCartButton = ({
  addProductToCart, isInCart, id, removeProduct, additionStyle
}) => {
  
  return(
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