import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Pagination from '../Pagination'

const mapStateToProps = (
  { products: { list, productsPerPage } },
  { query, filteredProducts }
) => ({
  allElements: filteredProducts || list,
  elemPerPage: productsPerPage,
  query
})

const PaginationContainer = connect(
  mapStateToProps
)(Pagination)

export default withRouter(PaginationContainer)