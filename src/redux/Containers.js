import { connect } from 'react-redux'
import { productsFetchData } from './actionCreators'
import ProductsList from '../components/ProductsList'

export const ProductsListContainer = connect(
  state => ({
    products: state.products
  }),
  dispatch => ({
    fetchData(url) {
      dispatch(productsFetchData(url))
    }
  })
)(ProductsList)
