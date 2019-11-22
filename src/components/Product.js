import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firstLetterToUpperCase } from '../lib/array-helpers'
import  AddToCartButton from './containers/AddToCartButton'
import './stylesheets/Product.css'

const buttonStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%'
}

class Product extends Component {
  
  render() {
    const {
      name, 
      category, 
      img, 
      price, 
      _id,
    } = this.props; 

    return(
      <li className='product'>
        <div className='img-wrapper'>
          <Link className='img-link' to={`/product/${_id}`}>
            <img src={img} alt='product img'/>
          </Link>
        </div>
        <div className='product-caption'>
          <Link 
            className='product-category' 
            to={`/category/${category.toLowerCase()}`}
          >
            {firstLetterToUpperCase(category)}
          </Link>
          <h1 className='product-name'>
            <Link to={`/product/${_id}`}>
              {name}
            </Link>
          </h1>
        </div>
        <h2 className='product-price'>{price} р.</h2>
        <AddToCartButton 
          style={buttonStyle} 
          id={_id}
          className='product-button'/>
      </li>
    )
  }
}

export default Product;