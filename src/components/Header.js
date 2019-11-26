import React from 'react'
import Search from './Search'
// import { SearchContainer } from '../redux/Containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './stylesheets/Header.css'

const Header = ({ 
  logo = 'unknown', 
  elementsInCartAmout = 0, 
  sideMenuHandling 
}) =>
  <header className='header'>
    <div className='container'>
      <div className='header-inner'>
        <span onClick={() => 
          sideMenuHandling()} 
          className='header-menu'>
          <FontAwesomeIcon icon={faBars}/>
        </span>
        <Link to='/' className='logo'>
          {logo}
        </Link>
        <Search/>
        <Link to='/cart' className='cart-link'>
          <FontAwesomeIcon icon={faShoppingCart}/>  
          <span className='cart-title'>Корзина</span>
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

