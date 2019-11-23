import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  productsFetchData,
  fetchProductsByParam
} from '../../redux/actionCreators'
import { 
  sortProducts, getElementsFromArrayByInterval, filterProducts
} from '../../lib/array-helpers'
import queryString from 'query-string'
import ProductsList from '../ProductsList'

const mapStateToProps = (
  { products: { 
    list, 
    productsPerPage, 
    isFetching, 
    isMainDataFetched,
   } 
  },
  { match: { params }, location }
) => {
  //Query Params
  let query = queryString.parse(location.search);
  let sortValue = query.sort;
  const currentPage = query.page || 1;
  let category = params.category;

  //Pagination
  const lastElement = productsPerPage * currentPage - 1;
  const firstElement = lastElement - productsPerPage + 1;

  if(category && isMainDataFetched) {
    list = filterProducts(list, 'category', category);
    console.log(category);
  }
  
  let currentProducts = getElementsFromArrayByInterval(
    list, firstElement, lastElement
  )
  console.log(list);
  return {
    products: sortProducts(currentProducts, sortValue),
    category: params.category,
    search: params.query,
    location,
    query,
    isFetching,
    isMainDataFetched
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData(url) {
    dispatch(productsFetchData(url));
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