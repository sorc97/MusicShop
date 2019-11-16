import React, { Component } from 'react'
import Product from './Product'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/ProductsList.css'
  

class ProductsList extends Component {

  constructor() {
    super();
    this.fetchAllProducts = this.fetchAllProducts.bind(this);
    this.fetchProductsByCategory = this.fetchProductsByCategory.bind(this);
  }

  componentDidMount() {
    const { category } = this.props;

    if(category) {
      this.fetchProductsByCategory(category);
      return;
    }
    
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    const { fetchData } = this.props;

    fetchData('/api/products');
  }

  fetchProductsByCategory(category) {
    const { fetchData } = this.props;

    fetchData(`/api/products/category/${encodeURIComponent(category)}`);
  }
  
  render() {
    const { products, category } = this.props;
    
    return(
      <div className='products-list-wrapper'>
        <div className='products-list-caption'>
          <h1 className='products-mainCategory'>
            { category || 'Все товары' }
          </h1>
          {
            category &&
              <span onClick={() => this.fetchAllProducts()}>
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
                <Product 
                  key={product._id} 
                  {...product}
                  onClick={() => 
                    this.fetchProductsByCategory(product.category)}
                />
              )
            }
          </ul>
        }
      </div>
    )
  }
}


export default ProductsList