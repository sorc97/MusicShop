import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Pagination from '../Pagination'

const PaginationContainer = withRouter( 
  connect(
    ({ products: {list, productsPerPage} }, { query }) => ({
      allElements: list,
      elemPerPage: productsPerPage,
      query
    })
  )(Pagination)
)

export default PaginationContainer;