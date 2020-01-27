import React from 'react'
import PropTypes from 'prop-types'
import ProductsItem from '../ProductsItem/ProductsItem'
import './ProductsList.css'

const ProductsList = ({ products = [] }) =>
  products.length > 0 && (
    <div className='products-list-wrapper'>
      <ul className='products-list'>
        {
          products.map(product =>
            <ProductsItem
              key={product._id}
              {...product}
              price={product.price.toLocaleString()}
            />
          )
        }
      </ul>
    </div>
  )

ProductsList.propTypes = {
  products: PropTypes.array
}

export default ProductsList