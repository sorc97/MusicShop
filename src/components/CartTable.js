import React from 'react';
import Counter from './Counter'
import './stylesheets/CartTable.css'

const CartTable = ({
  products, removeProduct, changeAmount
}) =>
  <div className='cart-table'>
      <div className='table-header'>
        <span></span>
        <span>Наименование</span>
        <span>Цена</span>
        <span>Кол-во</span>
        <span>Удалить</span>
      </div>

      <div className='cart-products-list'>
        {
          products.map(({
            _id, img, name, price, amount = 0
          }) => 
            <div key={_id} className="cart-product">

              <div className='cart-product-img-wrapper'>
                <img 
                  className='cart-product-img' 
                  src={img}
                />
              </div>
              <h2 className='cart-product-title'>{name}</h2>
              <h3 className='cart-product-price'>{price} р.</h3>
              <Counter 
                countUp={() => changeAmount(_id, '+')}
                countDown={() => changeAmount(_id, '-')}
                currentAmount={amount} />
              <button 
                className='cart-product-remove'
                onClick={() => removeProduct(_id)}  
              >
                &times;
              </button>

            </div>
          )
        }
      </div>
      <div className='cart-totalPrice'>
        <h3>
          Итоговая цена: {
            products.reduce((prev, next) => 
              prev + next.price * next.amount, 0
            )
          } р.
        </h3>
      </div>
  </div>

export default CartTable;