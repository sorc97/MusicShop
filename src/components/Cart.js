import React from 'react';
import CartTable from './CartTable'
import './stylesheets/Cart.css';

const Cart = ({
  products, removeProduct, changeAmount
}) =>
  <main className='cart'>
    <div className='container'>
      <div className='cart-inner'>
        {
          (!products.length) ? 
          <h1>В корзине пусто</h1>:
          <CartTable
            removeProduct={removeProduct}
            changeAmount={changeAmount}
            products={products}
          /> 
        }
      </div>
    </div>
  </main>

export default Cart;
