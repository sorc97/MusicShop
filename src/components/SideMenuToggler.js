import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./stylesheets/SideMenuToggler.css"

const SideMenuToggler = ({ handleClick = f => f }) =>
  <span
    onClick={handleClick}
    className='header-menu'>
    <FontAwesomeIcon icon={faBars} />
  </span>

SideMenuToggler.propTypes = {
  handleClick: PropTypes.func
}

export default SideMenuToggler
