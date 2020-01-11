import { connect } from 'react-redux'
import Products from './Products'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import {
  fetchAllProducts,
  fetchProductsByParam
} from '../../../redux/actionCreators'
import {
  sortProducts,
  getElementsFromArrayByInterval,
  filterProducts,
  searchByMultipleFields
} from '../../../lib/array-helpers'
import { productsPerPage } from '../../../lib/config'

const mapStateToProps = (
  {
    products: {
      list,
      isFetching,
      fetchedBy
    }
  }, //state
  { match: { params }, location } //props
) => {
  //Query Params
  const query = queryString.parse(location.search);
  const { category, search } = params;
  const sortValue = query.sort;
  //Products list
  let currentList = [...list];
  const isMainDataFetched = (fetchedBy === "main");
  //Pagination
  const currentPage = +query.page || 1;
  const lastElement = productsPerPage * currentPage - 1;
  const firstElement = lastElement - productsPerPage + 1;

  //Filter by category
  if (category && isMainDataFetched) {
    currentList = filterProducts(currentList, 'category', category)
  }
  //Elements searching
  if (search && isMainDataFetched) {
    currentList = searchByMultipleFields(
      currentList, 'name category', search
    )
    console.log('SEARCH', currentList);
  }
  //Products sorting
  const sortedProducts = sortProducts(currentList, sortValue);
  //Products paginating
  let paginatedProducts = getElementsFromArrayByInterval(
    sortedProducts, firstElement, lastElement
  )

  console.log(currentList);

  return {
    products: paginatedProducts,
    sortedProducts,
    category,
    search,
    location,
    currentPage,
    isFetching,
    isMainDataFetched,
    params,
    fetchedBy
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData() {
    dispatch(fetchAllProducts());
  },
  fetchByParam(path, category) {
    dispatch(fetchProductsByParam(path, category))
  }
})

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default withRouter(ProductsContainer)