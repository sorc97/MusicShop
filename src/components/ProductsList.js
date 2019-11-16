import React, { Component } from 'react'
import Product from './Product'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/ProductsList.css'
  

class ProductsList extends Component {

  componentDidMount() {
    const { fetchData, category } = this.props;

    if(category) {
      fetchData(`/api/products/category/${encodeURIComponent(category)}`)
      return;
    }
    
    fetchData('/api/products');
  }

  componentDidUpdate() {
    const {category} = this.props;
    console.log(category);
  }
  
  render() {
    const { products, category, fetchData } = this.props;
    
    return(
      <div className='products-list-wrapper'>
        <div className='products-list-caption'>
          <h1 className='products-mainCategory'>
            { category || 'Все товары' }
          </h1>
          {
            category &&
              <span onClick={() => fetchData('/api/products')}>
                <NavLink to={'/'} className='products-list-goBack'>
                  <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                </NavLink>
              </span>
          }
        </div>
        {
          (products.length === 0) ?
          <p>Loading...</p> :
          <ul className='products-list'>
            {
              products.map(product =>
                <Product key={product._id} {...product}/>
              )
            }
          </ul>
        }
      </div>
    )
  }
}


export default ProductsList