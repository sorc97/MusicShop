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
  { products: { list, productsPerPage, isFetching, isMainDataFetched } } ,
  { match: { params: {category, search}, params }, location }
) => {
  //Query Params
  let query = queryString.parse(location.search);
  let sortValue = query.sort;
  const currentPage = query.page || 1;

  //Pagination
  const lastElement = productsPerPage * currentPage - 1;
  const firstElement = lastElement - productsPerPage + 1;

  //Filter by category
  if(category && isMainDataFetched) {
    list = filterProducts(list, 'category', category)
  }
  
  //Elements searching
  if(search && isMainDataFetched) {
    list = searchByMultipleFields(list, 'name category', search)
    console.log('SEARCH', list);
  }
  
  //Filter elements to pagination
  let currentProducts = getElementsFromArrayByInterval(
    list, firstElement, lastElement
  )
  
  console.log(list);
  
  return {
    products: sortProducts(currentProducts, sortValue),
    category,
    search,
    location,
    query,
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