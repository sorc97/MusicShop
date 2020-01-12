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
import { 
  productsPerPage, 
  categoriesHash 
} from '../../../lib/config'

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
  const categoryName = categoriesHash[category] || "";
  // Products data
  let currentList = [...list];
  const isMainDataFetched = (fetchedBy === "main");
  //Pagination
  const currentPage = +query.page || 1;
  const lastElement = productsPerPage * currentPage - 1;
  const firstElement = lastElement - productsPerPage + 1;

  //Filter by category
  if (category && isMainDataFetched) {
    console.log(categoryName);
    currentList = filterProducts(
      currentList, 'category', categoryName.toLowerCase()
    )
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
    categoryName,
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