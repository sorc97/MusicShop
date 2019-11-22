import { connect } from 'react-redux'
import Header from '../Header'
import { logo } from '../../lib/config'

const HeaderContainer = connect(
  ({ products: { cart } }) => ({
    elementsInCartAmout: cart.reduce((prev, next) =>
      prev + next.amount
    , 0),
    logo
  })
)(Header)

export default HeaderContainer