import { connect } from 'react-redux'
import Header from '../Header'
import { logo } from '../../lib/config'
import { toggleSideMenu } from '../../redux/actionCreators'

const HeaderContainer = connect(
  ({ products: { cart } }) => ({
    //Counting amount of elements in cart 
    elementsInCartAmout: cart.reduce(
      (prev, next) =>  
        prev + next.amount
      , 0),
    logo
  }),
  dispatch => ({
    sideMenuHandling() {
      dispatch(toggleSideMenu());
    }
  })
)(Header)

export default HeaderContainer