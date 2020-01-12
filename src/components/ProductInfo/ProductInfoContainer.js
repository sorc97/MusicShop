import { connect } from 'react-redux'
import { findById } from '../../lib/helpers'
import {
  fetchProductById,
  addToCart
} from '../../redux/actionCreators'
import ProductInfo from './ProductInfo'

const mapStateToProps = (
  { products: { list } },
  { match: { params: { id } } }
) => ({
  ...findById(list, id),
  id
})

const mapDispatchToProps = dispatch => ({
  fetchProduct(url) {
    dispatch(fetchProductById(url))
  },
  addProductToCart(id) {
    dispatch(addToCart(id));
  }
})

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo)

export default ProductInfoContainer