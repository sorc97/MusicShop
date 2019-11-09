import React from 'react'
import './stylesheets/ProductsList.css'

const ProductsList = ({products = []}) =>
  <div className='products-list-wrapper'>
    {
      (products.length === 0) ?
      <p>No products</p> :
      <ul className='products-list'>
        {
          products.map((item, key) =>
            <li className='products-item'>
              
            </li>
          )
        }
      </ul>
    }
  </div>


export default ProductsList