import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById,
  addToCart
} from './actionCreators'
import { 
  findById,
  sortProducts
} from '../lib/array-helpers'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import Cart from '../components/Cart'
import { sortList, categoriesList } from '../lib/config'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

export const HeaderContainer = connect(
  ({cart}) => ({
    elementsInCartAmout: cart.length,
    logo: "MusicShop"
  })
)(Header)

export const ProductsListContainer = withRouter(
  connect(
    ({products}, {match, location}) => {
      let query = location.search;
      let sortValue = queryString.parse(query).sort;

      return {
        products: sortProducts(products, sortValue),
        category: match.params.category,
        search: match.params.query,
        location,
        match
      }
    },
    dispatch => ({
      fetchData(url) {
        dispatch(productsFetchData(url));
      },
      addProductToCart(id) {
        dispatch(addToCart(id));
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
  })
)(Categories)

export const CartContainer = connect(
  state => ({
    products: state.cart
  }),
  dispatch => ({

  })
)(Cart)