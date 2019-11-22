import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { productsFetchData } from '../../redux/actionCreators'
import { 
  sortProducts, getElementsFromArrayByInterval
} from '../../lib/array-helpers'
import queryString from 'query-string'
import ProductsList from '../ProductsList'

const mapStateToProps = (
  { products: { list, productsPerPage } },
  { match: { params }, location }
) => {
  //Query Params
  let query = queryString.parse(location.search);
  let sortValue = query.sort;
  const currentPage = query.page || 1;

  //Pagination
  const lastElement = productsPerPage * currentPage - 1;
  const firstElement = lastElement - productsPerPage + 1;

  const currentProducts = getElementsFromArrayByInterval(
    list, firstElement, lastElement
  )

  return {
    products: sortProducts(currentProducts, sortValue),
    category: params.category,
    search: params.query,
    location,
    query
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData(url) {
    dispatch(productsFetchData(url));
  }
})

const VisibleProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)

export default withRouter(VisibleProducts)