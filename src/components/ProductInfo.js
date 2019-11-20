import React from 'react'
import PropTypes from 'prop-types'
import { AddToCartButtonContainer } from '../redux/Containers'
import './stylesheets/ProductInfo.css'

const buttonStyle = {
  width: '100%'
}

class ProductInfo extends React.Component {

  componentDidMount() {
    const {
      name, fetchProduct, productId, isInCart
    } = this.props;
    console.log(name);
    if(name === 'unknown') {
      fetchProduct(productId)
    }
  }
  
  render() {
    const {
      name, category, img, price, description, productId
    } = this.props;
    
    return(
      <main className='product-info'>
        <div className='container'>
          <div className='product-info-inner'>
            <div className='img-section'>
              <img src={img} alt='product img'/>
            </div>
            <div className='about-section'>
              <h1>{name}</h1>
              <span>{category}</span>
              <p className='about-section-description'>
                {description}
              </p>
            </div>
            <div className='buy-section'>
              <h2>{price} р.</h2>
              <AddToCartButtonContainer 
                additionStyle={buttonStyle}
                id={productId}/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

ProductInfo.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number
}

ProductInfo.defaultProps = {
  name: "unknown",
  category: "unknown",
  description: "",
  img: "",
  price: 0
}

export default ProductInfo