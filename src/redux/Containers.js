import { connect } from 'react-redux'
import { 
  productsFetchData, 
  fetchProductById,
  addToCart,
  removeFromCart,
  changeAmount
} from './actionCreators'
import { 
  findById,
  sortProducts,
  getElementsFromArrayByInterval
} from '../lib/array-helpers'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import ProductInfo from '../components/ProductInfo'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import Cart from '../components/Cart'
import CartTable from '../components/CartTable'
import Pagination from '../components/Pagination'
import AddToCartButton from '../components/AddToCartButton'
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
    (
      { products: { list, productsPerPage } }, 
      { match, location }
    ) => {
      //Query Params
      let query = queryString.parse(location.search);
      let sortValue = query.sort;
      const currentPage = query.page || 1;

      //Pagination
      const lastElement = productsPerPage * currentPage - 1;
      const firstElement = lastElement - productsPerPage + 1;

      const currentProducts = getElementsFromArrayByInterval(
        list, firstElement, lastElement
      )

      return {
        products: sortProducts(currentProducts, sortValue),
        category: match.params.category,
        search: match.params.query,
        location,
        query
      }
    },
    dispatch => ({
      fetchData(url) {
        dispatch(productsFetchData(url));
      }
    })
  )(ProductsList)
)

export const AddToCartButtonContainer = connect(
  ({ products: {cart} }, {id, additionStyle}) => ({
    isInCart: findById(cart, id),
    id,
    additionStyle
  }),
  dispatch => ({
    addProductToCart(id) {
      dispatch(addToCart(id));
    },
    removeProduct(id){
      dispatch(removeFromCart(id));
    }
  })

)(AddToCartButton)

export const ProductInfoContainer = connect(
  ({ products: { list, cart }}, {match}) => {
    let product = findById(list, match.params.id);
    let isInCart = !!findById(cart, match.params.id);

    return {
      ...product,
      productId: match.params.id,
      isInCart
    }
  },
  dispatch => ({
    fetchProduct(url) {
      dispatch(fetchProductById(url))
    },
    addProductToCart(id) {
      dispatch(addToCart(id));
    }
  })
)(ProductInfo)

export const SortContainer = withRouter(
  connect(
    (state) => ({
      sort: sortList
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
  })
)(Cart)

export const CartTableContainer = connect(
  ({ products: {cart} }) => ({
    products: cart
  }),
  dispatch => ({
    removeProduct(id) {
      dispatch(removeFromCart(id));
    },
    changeCartProductAmount(id, operator) {
      dispatch(changeAmount(id, operator))
    }
  })
)(CartTable)

export const PaginationContainer = withRouter( 
  connect(
    ({ products: {list, productsPerPage} }, { query }) => ({
      allElements: list,
      elemPerPage: productsPerPage,
      query
    })
  )(Pagination)
)