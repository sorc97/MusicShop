import React from 'react'
import PropTypes from 'prop-types'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import CategoryLink from '../CategoryLink/CategoryLink'
import './ProductInfo.css'

const buttonStyle = {
  width: '100%'
}

class ProductInfo extends React.Component {

  componentDidMount() {
    const {
      name, fetchProduct, id
    } = this.props;

    if (name === 'unknown') {
      fetchProduct(id)
    }
  }

  render() {
    const {
      name, category, img, price, description, id
    } = this.props;

    return (
      <main className='product-info'>
        <div className='container'>
          <div className='product-info-inner'>
            <div className='img-section'>
              <img src={img} alt='product img' />
            </div>
            <div className='about-section'>
              <h1>{name}</h1>
              <CategoryLink
                className='about-category'
                category={category}
              />
              <p className='about-description'>
                {description}
              </p>
            </div>
            <div className='buy-section'>
              <h2>{price.toLocaleString()} р.</h2>
              <AddToCartButton
                id={id}
                style={buttonStyle}
                className='product-button' />
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