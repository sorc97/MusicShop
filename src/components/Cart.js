import React from 'react';
import { CartTableContainer } from '../redux/Containers'
// import CartTable from '../components/CartTable'
import './stylesheets/Cart.css';

const Cart = ({products}) =>
  <main className='cart'>
    <div className='container'>
      <div className='cart-inner'>
        {
          (!products.length) ? 
          <h1>В корзине пусто</h1>:
          <CartTableContainer /> 
        }
      </div>
    </div>
  </main>

export default Cart;
