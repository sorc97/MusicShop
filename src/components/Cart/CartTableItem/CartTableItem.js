import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../../Counter'
import './CartTableItem.css'

const CartTableItem = ({
  _id,
  img,
  name,
  price,
  amount,
  changeAmount,
  removeProduct
}) =>
  <li className="cart-product">
    <div className='cart-product-img-wrapper'>
      <img
        className='cart-product-img'
        src={img} />
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
  </li>

CartTableItem.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  changeAmount: PropTypes.func,
  removeProduct: PropTypes.func
}

CartTableItem.defaultProps = {
  _id: "",
  img: "",
  name: "Unknown",
  price: 0,
  amount: 0,
  changeAmount: () => { },
  removeProduct: () => { }
}

export default CartTableItem