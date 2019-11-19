import React from 'react'
import Search from './Search'
// import { SearchContainer } from '../redux/Containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './stylesheets/Header.css'

const Header = ({ logo = 'unknown', elementsInCartAmout = 0 }) =>
  <header className='header'>
    <div className='container'>
      <div className='header-inner'>
        <h1 className='logo'>{logo}</h1>
        <Search/>
        <Link to='/cart' className='cart-link'>
          <FontAwesomeIcon icon={faShoppingCart}/>  
          <span>Корзина</span>
          <span className='cart-elementsCounter'>
            {elementsInCartAmout}
          </span>
        </Link>
      </div>
    </div>
  </header>

Header.propTypes = {
  logo: PropTypes.string,
  elementsInCartAmout: PropTypes.number
}

export default Header;

