import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById,
  changeSort
} from './actionCreators'
import { 
  findById,
  sortProducts
} from '../lib/array-helpers'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'
import Sort from '../components/Sort'
import {sortList} from '../lib/config'


export const ProductsListContainer = connect(
  ({products, sort}) => ({
    products: sortProducts(products, sort)
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

export const SortContainer = connect(
  (state) => ({
    sort: sortList
  }),
  (dispatch) => ({
    changeSort(sortValue){
      dispatch(changeSort(sortValue))
    }
  })
)(Sort)