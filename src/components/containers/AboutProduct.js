import { connect } from 'react-redux'
import { findById } from '../../lib/array-helpers';
import ProductInfo from '../ProductInfo';

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

const AboutProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo)

export default AboutProduct;