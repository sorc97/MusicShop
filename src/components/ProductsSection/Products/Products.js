import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList/ProductsList'
import ProductsCaption from './ProductsCaption/ProductsCaption'
import Pagination from '../../Pagination/Pagination'
import { productsPerPage } from '../../../lib/config'
import './Products.css'

class Products extends Component {

  componentDidMount() {
    const {
      isMainDataFetched,
      params,
      fetchedBy,
      categoryName
    } = this.props;
    const { fetchData, fetchByParam } = this.props;
    const paramName = Object.keys(params)[0];

    // Preventing unnecessary fetching
    if (paramName && fetchedBy === "param") return;
    if (isMainDataFetched) return;

    // Fetch by param
    if (paramName && !isMainDataFetched) {
      console.log('FETCH BY PARAMS', paramName);
      if (paramName === 'category') {
        fetchByParam(paramName, categoryName);
      } else {
        fetchByParam(paramName, params[paramName]);
      }
      return;
    }

    fetchData();
    console.log('FETCHED INITIAL');
  }

  componentDidUpdate(prevProps) {
    const { location, isMainDataFetched } = this.props;
    const { location: { pathname: prevPathname } } = prevProps;

    if (prevPathname !== location.pathname && !isMainDataFetched) {
      const { fetchData } = this.props;
      fetchData();
    }
  }

  render() {
    const {
      products,
      category,
      search,
      isFetching,
      sortedProducts,
      currentPage,
      categoryName
    } = this.props;

    return (
      <div className='products-wrapper'>
        <ProductsCaption
          category={category}
          categoryName={categoryName}
          search={search} />
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Нет товаров</h2>}
        <ProductsList products={products} />
        <Pagination
          allElements={sortedProducts}
          currentPage={currentPage}
          elemPerPage={productsPerPage} />
      </div>
    )
  }
}
// PropTypes
Products.propTypes = {
  products: PropTypes.array,
  sortedProducts: PropTypes.array,
  category: PropTypes.string,
  categoryName: PropTypes.string,
  search: PropTypes.string,
  location: PropTypes.object,
  params: PropTypes.object,
  currentPage: PropTypes.number,
  isFetching: PropTypes.bool,
  isMainDataFetched: PropTypes.bool,
  fetchedBy: PropTypes.string
}

Products.defaultProps = {
  products: [],
  sortedProducts: [],
  category: "",
  categoryName: "",
  search: "",
  location: {},
  params: {},
  currentPage: 1,
  isFetching: false,
  isMainDataFetched: false,
  fetchedBy: ""
}

export default Products