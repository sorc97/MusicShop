import React from 'react';
import './stylesheets/CartTable.css'

const CartTable = ({products}) =>
  <table className='cart-table'>
    <tbody>
      <tr>
        <th></th>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Кол-во</th>
        <th>Удалить</th>
      </tr>
      {
        products.map(({_id, img, name, price}, i) => 
          <tr key={_id + i} className="cart-product">
            <td>
              <div className='cart-product-img-wrapper'>
                <img 
                  className='cart-product-img' 
                  src={img}
                />
              </div>
            </td>
            <td>
              <h2>{name}</h2>
            </td>
            <td>
              <h3>{price} р.</h3>
            </td>
            <td>
              <h3>1</h3>
            </td>
            <td>
              <button className='cart-product-remove'>
                &times;
              </button>
            </td>
          </tr>
        )
      }
      <tr className='cart-totalPrice'>
        <td colSpan='5'>
          <h3>
            Итоговая цена: {
              products.reduce((prev, next) => prev + next.price, 0)
            } р.
          </h3>
        </td>
      </tr>
    </tbody>
  </table>

export default CartTable;