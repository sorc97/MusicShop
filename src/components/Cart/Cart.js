import React from 'react'
import PropTypes from 'prop-types'
import CartTable from './CartTable/CartTable'
import './Cart.css'

const Cart = ({
  productsList, removeProduct, changeAmount, finalPrice
}) =>
  <main className='cart'>
    <div className='container'>
      <div className='cart-inner'>
        {
          (!productsList.length) ? 
          <h1>В корзине пусто</h1>:
          <CartTable
            removeProduct={removeProduct}
            changeAmount={changeAmount}
            products={productsList}
            finalPrice={finalPrice.toLocaleString()}
          /> 
        }
      </div>
    </div>
  </main>

Cart.propTypes = {
  productsList: PropTypes.array,
  finalPrice: PropTypes.number,
  removeProduct: PropTypes.func,
  changeAmount: PropTypes.func,
}

Cart.defaultProps = {
  productsList: [],
  finalPrice: 0,
  removeProduct: () => {},
  changeAmount: () => {}
}

export default Cart
