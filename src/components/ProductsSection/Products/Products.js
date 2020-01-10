import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList/ProductsList'
import ProductsCaption from './ProductsCaption/ProductsCaption'
import Pagination from '../../Pagination/Pagination'
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
        <ProductsCaption 
          category={category} 
          search={search} />
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Нет товаров</h2>}
        <ProductsList products={products} />
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