import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById,
  productsFetchDataSuccess
} from './actionCreators'
import { 
  findById,
  sortProducts,
  filterByCategory
} from '../lib/array-helpers'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import { sortList, categoriesList } from '../lib/config'
import { withRouter } from 'react-router-dom'


export const ProductsListContainer = withRouter(
  connect(
    ({products}, {match, location}) => {
      let query = location.search;
      let sortValue = new URLSearchParams(query).get('sort');

      return {
        products: sortProducts(products, sortValue),
        category: match.params.category
      }
    },
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

export const SortContainer = withRouter(
  connect(
    (state, router) => ({
      sort: sortList,
      router
    })
  )(Sort)
)

export const CategoriesContainer = connect(
  state=> ({
    categoriesItems: categoriesList
  }),
  dispatch => ({
    fetchData(url) {
      dispatch(productsFetchData(url))
    }
  })
)(Categories)