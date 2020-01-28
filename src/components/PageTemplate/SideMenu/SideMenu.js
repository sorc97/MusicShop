import React from 'react'
import PropTypes from 'prop-types'
import './SideMenu.css'

const SideMenu = ({
  children,
  isSideMenuOpen = false,
  sideMenuClickHandler = f => f,
}) =>
  (isSideMenuOpen) &&
  <div
    onClick={sideMenuClickHandler}
    className='side-menu'
  >
    <span className='side-menu-close'>&times;</span>
    {children}
  </div>

SideMenu.propTypes = {
  children: PropTypes.node,
  sideMenuClickHandler: PropTypes.func,
  isSideMenuOpen: PropTypes.bool,
}

export default SideMenu
