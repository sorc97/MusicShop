import React, { Component } from 'react'
import Product from './Product'
import PaginationContainer from './containers/PaginationContainer'
import PropTypes from 'prop-types'
import equal from 'deep-equal'
import { NavLink } from 'react-router-dom'
import { firstLetterToUpperCase } from '../lib/array-helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/ProductsList.css'


class ProductsList extends Component {

  componentDidMount() {
    const { isMainDataFetched, params } = this.props;
    const { fetchData, fetchByParam } = this.props;
    const paramName = Object.keys(params)[0];

    if (paramName && !isMainDataFetched) {
      console.log('FETCH BY PARAMS')
      fetchByParam(paramName, params[paramName]);
      return;
    }

    console.log(isMainDataFetched);

    if (isMainDataFetched) return;


    fetchData();

    /* switch(true) {
      case !!category:
        fetchByParam('category', category.toLowerCase());
      break;

      case !!search:
        fetchByParam('search', search.toLowerCase());
      break;

      default:
        fetchData();
    } */

    console.log('FETCHED INITIAL');
  }

  componentDidUpdate(prevProps) {
    const { location, isMainDataFetched } = this.props;

    if (prevProps.location.pathname !== location.pathname && !isMainDataFetched) {
      console.log('FROM UPDATE');
      this.fetchAllProducts();
    }
  }

  fetchAllProducts() {
    const { fetchData } = this.props;
    this.isMainDataFetched = true;
    fetchData();
  }

  render() {
    const { 
      products,
      category, 
      search, 
      query, 
      isFetching
    } = this.props;

    return (
      <div className='products-list-wrapper'>
        <div className='products-list-caption'>
          <h1 className='products-mainCategory'>
            {(category) ? firstLetterToUpperCase(category) :
              (search) ? 'Поиск' : 'Все товары'}
          </h1>
          {
            (category || search) &&
            <span>
              <NavLink to={'/'} className='products-list-goBack'>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </NavLink>
            </span>
          }
        </div>
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Нет товаров</h2>}
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
          filteredProducts={(category || search) && products}
          query={query} />
      </div>
    )
  }
}


export default ProductsList