import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  fetchAllProducts,
  fetchProductsByParam
} from '../../redux/actionCreators'
import {
  sortProducts,
  getElementsFromArrayByInterval,
  filterProducts,
  searchByMultipleFields
} from '../../lib/array-helpers'
import queryString from 'query-string'
import ProductsList from '../ProductsList'

const mapStateToProps = (
  {
    products: {
      list,
      productsPerPage,
      isFetching,
      isMainDataFetched
    }
  }, //state
  { match: { params }, location } //props
) => {
  //Query Params
  const query = queryString.parse(location.search);
  const { category, search } = params;
  const sortValue = query.sort;
  const currentPage = +query.page || 1;
  let currentList = [...list];
  //Pagination
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
    params
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

const VisibleProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)

export default withRouter(VisibleProducts)