import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Pagination from './Pagination'
import { NavLink } from 'react-router-dom'
import { firstLetterToUpperCase } from '../lib/array-helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { initialProductsPerPage } from '../lib/config'
import './stylesheets/ProductsList.css'


class ProductsList extends Component {

  componentDidMount() {
    const { isMainDataFetched, params } = this.props;
    const { fetchData, fetchByParam } = this.props;
    const paramName = Object.keys(params)[0];

    if (paramName && !isMainDataFetched) {
      console.log('FETCH BY PARAMS', paramName);
      fetchByParam(paramName, params[paramName]);
      return;
    }

    console.log(isMainDataFetched);

    if (isMainDataFetched) return;

    fetchData();
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
    fetchData();
  }

  render() {
    const {
      products,
      category,
      search,
      isFetching,
      sortedProducts,
      currentPage
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
        <Pagination
          allElements={sortedProducts}
          currentPage={currentPage}
          elemPerPage={initialProductsPerPage} />
      </div>
    )
  }
}


export default ProductsList