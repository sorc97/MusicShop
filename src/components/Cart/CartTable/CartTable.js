import React from 'react'
import PropTypes from 'prop-types'
import CartTableItem from '../CartTableItem/CartTableItem'
import './CartTable.css'

const CartTable = ({
  products, removeProduct, changeAmount, finalPrice
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
          price={product.price.toLocaleString()}
          removeProduct={removeProduct}
          changeAmount={changeAmount}
        />
      )}
    </ul>
    <div className='cart-totalPrice'>
      <h3>
        Итоговая цена: {finalPrice} р.
      </h3>
    </div>
  </div>

CartTable.propTypes = {
  products: PropTypes.array,
  finalPrice: PropTypes.string,
  removeProduct: PropTypes.func,
  changeAmount: PropTypes.func,
}

CartTable.defaultProps = {
  products: [],
  finalPrice: "0",
  removeProduct: () => { },
  changeAmount: () => { }
}

export default CartTable