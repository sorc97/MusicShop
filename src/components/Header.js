import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import CartDisplay from './CartDisplay'
import SideMenuToggler from './SideMenuToggler'
import { Link } from 'react-router-dom'
import './stylesheets/Header.css'

const Header = ({
  logo = 'Logo',
  elementsInCartAmout = 0,
  sideMenuHandling
}) =>
  <header className='header'>
    <div className='container'>
      <div className='header-inner'>
        <SideMenuToggler handleClick={sideMenuHandling}/>
        <Link to='/' className='logo'>
          {logo}
        </Link>
        <Search />
        <CartDisplay 
          amount={elementsInCartAmout} 
          text='Корзина'
        />
      </div>
    </div>
  </header>

Header.propTypes = {
  logo: PropTypes.string,
  elementsInCartAmout: PropTypes.number,
  sideMenuHandling: () => {}
}

export default Header;

