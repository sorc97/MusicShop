import React, { Component } from 'react'
import Product from './Product'
import PaginationContainer from './containers/PaginationContainer'
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
    const { products, category, search, isMainDataFetched, fetchByParam } = this.props;
    // console.log(this.isMainDataFetched)
    console.log(isMainDataFetched);
    if(isMainDataFetched) return;

    // if(products.length !== 0) return;  //Проверить на баги

    if(category) {
      fetchByParam('category', category.toLowerCase());
      console.log('hi');
      return;
    }

    switch(true) {
      /* case !!category:
        this.fetchProductsByCategory(category);
      break; */

      case !!search:
        this.fetchProductsBySearch(search);
      break;

      default:
        this.fetchAllProducts();
    }
    
    console.log('FETCHED INITIAL');
  }

  componentDidUpdate(prevProps) {
    const {location, search, category, isFetching, isMainDataFetched} = this.props;
    
    if(prevProps.location.pathname !== location.pathname && !isMainDataFetched) {
      this.fetchAllProducts();
    }
    // console.log(this.isMainDataFetched);
  }

  /* componentDidUpdate(prevProps) {
    const {location, search, category, isFetching} = this.props;
    
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
  } */

  /* shouldComponentUpdate(prevProps) {
    const {location, products, isFetching} = this.props;
    if(
      equal(prevProps.products, products) &&
      location.pathname === prevProps.location.pathname &&
      location.search === prevProps.location.search 
    ) return false;

    return true;
  } */

  fetchAllProducts() {
    const { fetchData } = this.props;
    this.isMainDataFetched = true;
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
    const { products, category, search, query, isFetching } = this.props;
    // console.log(isFetching);
    
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
        {isFetching && products.length === 0 && <p>Loading...</p>}
        {!isFetching && products.length === 0 && <p>Нет товаров</p>}
        {products.length > 0 && (
          <ul className='products-list'>
            {
              products.map(product =>
                <Product 
                  key={product._id} 
                  {...product}
                />
              )
            }
          </ul>
        )}
        <PaginationContainer
          filteredProducts={(category) && products}
          query={query}/>
      </div>
    )
  }
}


export default ProductsList