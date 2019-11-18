import React from 'react'
import Search from './Search'
// import { SearchContainer } from '../redux/Containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import './stylesheets/Header.css'

const Header = ({ logo = 'unknown', elementsInCartAmout = 0 }) =>
  <header className='header'>
    <div className='container'>
      <div className='header-inner'>
        <h1 className='logo'>{logo}</h1>
        <Search/>
        <div className='cart-link-wrapper'>
          <a className='cart-link' href='#'>
            <FontAwesomeIcon icon={faShoppingCart}/>  
            Корзина
          </a>
          <span className='cart-elementsCounter'>
            {elementsInCartAmout}
          </span>
        </div>
      </div>
    </div>
  </header>

Header.propTypes = {
  logo: PropTypes.string,
  elementsInCartAmout: PropTypes.number
}

export default Header;

