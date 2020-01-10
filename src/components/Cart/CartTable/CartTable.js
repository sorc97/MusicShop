import React from 'react'
import PropTypes from 'prop-types'
import CartTableItem from '../CartTableItem/CartTableItem'
import './CartTable.css'

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
    <ul className='cart-products-list'>
      {products.map(product =>
        <CartTableItem
          key={product._id}
          {...product}
          removeProduct={removeProduct}
          changeAmount={changeAmount}
        />
      )}
    </ul>
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

CartTable.propTypes = {
  products: PropTypes.array,
  removeProduct: PropTypes.func,
  changeAmount: PropTypes.func
}

CartTable.defaultProps = {
  products: [],
  removeProduct: () => { },
  changeAmount: () => { }
}

export default CartTable