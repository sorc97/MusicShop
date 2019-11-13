import React, {Component} from 'react'
import './stylesheets/Product.css'

class Product extends Component {
  
  render() {
    const {name, category, img, price} = this.props; 

    return(
      <li className='product'>
        <div className='img-wrapper'>
          <img src={img} alt='product img'/>
        </div>
        <div className='product-caption'>
          <span className='product-category'>
            {category}
          </span>
          <h1 className='product-name'>
            {name}
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