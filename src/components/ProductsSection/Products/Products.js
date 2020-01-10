import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList/ProductsList'
import Pagination from '../../Pagination'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { firstLetterToUpperCase } from '../../../lib/array-helpers'
import { initialProductsPerPage } from '../../../lib/config'
import './Products.css'


class Products extends Component {

  componentDidMount() {
    const { isMainDataFetched, params, products } = this.props;
    const { fetchData, fetchByParam } = this.props;
    const paramName = Object.keys(params)[0];

    // if(paramName && products.length) return;

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
      currentPage,
    } = this.props;

    return (
      <div className='products-wrapper'>
        <div className='products-caption'>
          <h1 className='products-mainCategory'>
            {(category) ? firstLetterToUpperCase(category) :
              (search) ? 'Поиск' : 'Все товары'}
          </h1>
          {
            (category || search) &&
            <span>
              <Link to={'/'} className='products-goBack'>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </Link>
            </span>
          }
        </div>
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Нет товаров</h2>}
        <ProductsList products={products}/>
        <Pagination
          allElements={sortedProducts}
          currentPage={currentPage}
          elemPerPage={initialProductsPerPage} />
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.array,
  sortedProducts: PropTypes.array,
  category: PropTypes.string,
  search: PropTypes.string,
  location: PropTypes.object,
  params: PropTypes.object,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  isMainDataFetched: PropTypes.bool,
}

Products.defaultProps = {
  products: [],
  sortedProducts: [],
  category: "",
  search: "",
  location: {},
  params: {},
  currentPage: 1,
  isFetching: false,
  isMainDataFetched: false,
}

export default Products