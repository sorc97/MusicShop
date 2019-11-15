import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/Product.css'

class Product extends Component {
  
  render() {
    const {name, category, img, price, _id} = this.props; 

    return(
      <li className='product'>
        <div className='img-wrapper'>
          <Link className='img-link' to={`product/${_id}`}>
            <img src={img} alt='product img'/>
          </Link>
        </div>
        <div className='product-caption'>
          <span className='product-category'>
            {category}
          </span>
          <h1 className='product-name'>
            <Link to={`product/${_id}`}>
              {name}
            </Link>
          </h1>
        </div>
        <h2 className='product-price'>{price} р.</h2>
        <button className="product-button">
          В корзину
        </button>
      </li>
    )
  }
}

export default Product;