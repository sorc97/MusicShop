import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById,
  addToCart,
  removeFromCart
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
import Product from '../components/Product'
import { sortList, categoriesList } from '../lib/config'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

export const HeaderContainer = connect(
  ({ products: { cart } }) => ({
    elementsInCartAmout: cart.reduce((prev, next) =>
      prev + next.amount
    , 0),
    logo: "MusicShop"
  })
)(Header)

export const ProductsListContainer = withRouter(
  connect(
    ({ products: { list } }, { match, location }) => {
      let query = location.search;
      let sortValue = queryString.parse(query).sort;

      return {
        products: sortProducts(list, sortValue),
        category: match.params.category,
        search: match.params.query,
        location,
        match
      }
    },
    dispatch => ({
      fetchData(url) {
        dispatch(productsFetchData(url));
      }
    })
  )(ProductsList)
)

export const ProductContainer = connect(
  (state, { product }) => ({
    product
    // isInCart
  }),
  dispatch => ({
    addProductToCart(id) {
      dispatch(addToCart(id));
    }
  })
)(Product)

export const ProductInfoContainer = connect(
  ({ products: { list }}, {match}) => {
    let product = findById(list, match.params.id);

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
  ({products}) => ({
    products: products.cart
  }),
  dispatch => ({
    removeProduct(id) {
      dispatch(removeFromCart(id));
    }
  })
)(Cart)