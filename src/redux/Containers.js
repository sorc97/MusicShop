import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById
} from './actionCreators'
import { 
  findById,
  sortProducts
} from '../lib/array-helpers'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'
import Sort from '../components/Sort'
import { sortList } from '../lib/config'
import { withRouter } from 'react-router-dom'


export const ProductsListContainer = withRouter(
  connect(
    ({products}, {match}) => ({
      products: sortProducts(products, match.params.sortValue)
    }),
    dispatch => ({
      fetchData(url) {
        dispatch(productsFetchData(url))
      }
    })
  )(ProductsList)
)


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

export const SortContainer = connect(
  state => ({
    sort: sortList
  })
)(Sort)