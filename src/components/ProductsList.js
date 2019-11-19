import React, { Component } from 'react'
import Product from './Product'
import PropTypes from 'prop-types'
import equal from 'deep-equal'
import { NavLink } from 'react-router-dom'
import { firstLetterToUpperCase } from '../lib/array-helpers'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/ProductsList.css'
  

class ProductsList extends Component {

  constructor() {
    super();
    this.fetchAllProducts = this.fetchAllProducts.bind(this);
    this.fetchProductsByCategory = this.fetchProductsByCategory.bind(this);
    this.fetchProductsBySearch = this.fetchProductsBySearch.bind(this);
  }

  componentDidMount() {
    const { category, search } = this.props;

    switch(true) {
      case !!category:
        this.fetchProductsByCategory(category);
      break;

      case !!search:
        this.fetchProductsBySearch(search);
      break;

      default:
        this.fetchAllProducts();
    }
    
    console.log('FETCHED INITIAL');
  }

  componentDidUpdate(prevProps) {
    const {location, search, category} = this.props;
    
    if(prevProps.location.pathname !== location.pathname) {
      let path = location.pathname;

      switch(true) {
        case path.includes('search'):
          this.fetchProductsBySearch(search);
        break;

        case path.includes('category'):
          this.fetchProductsByCategory(category);
        break;
        
        default:
          this.fetchAllProducts();
      }
    }
    
    console.log('Products list was UPDATE ', prevProps, this.props);
  }

  shouldComponentUpdate(prevProps) {
    const {location, products} = this.props;
    if(
      equal(prevProps.products, products) &&
      location.pathname === prevProps.location.pathname &&
      location.search === prevProps.location.search 
    ) return false;

    return true;
  }

  fetchAllProducts() {
    const { fetchData } = this.props;
    fetchData('/api/products');
  }

  fetchProductsByCategory(category) {
    const { fetchData } = this.props;
    let encodedCategory = encodeURIComponent(category.toLowerCase());

    fetchData(`/api/products/category/${encodedCategory}`);
  }

  fetchProductsBySearch(searchQuery) {
    const { fetchData } = this.props;
    fetchData(`/api/products/search/${searchQuery}`);
  }
  
  render() {
    const { products, category, search, addProductToCart } = this.props;
    
    return(
      <div className='products-list-wrapper'>
        <div className='products-list-caption'>
          <h1 className='products-mainCategory'>
            { (category) ? firstLetterToUpperCase(category) : 
              (search) ? 'Поиск' : 'Все товары' }
          </h1>
          {
            (category || search) &&
              <span>
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
                  addProductToCart={
                    () => addProductToCart(product._id)
                  }
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