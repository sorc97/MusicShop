import { connect } from 'react-redux'
import { productsFetchData, fetchProductById } from './actionCreators'
import { findById } from '../lib/array-helpers'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'


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

export const ProductInfoContainer = connect(
  ({products}, {match}) => {
    let product = findById(products, match.params.id);

    return {
      ...product,
      productId: match.params.id
    }
  },
  dispatch => ({
    fetchProduct(url) {
      dispatch(fetchProductById(url))
    }
  })
)(ProductInfo)